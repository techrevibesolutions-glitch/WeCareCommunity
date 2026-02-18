import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// Validation Schema
const formSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name is required",
    })
    .min(2, "First name is required"),

  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name is required",
    })
    .min(2, "Last name is required"),

  dob: z
    .string({
      required_error: "Date of Birth is required",
      invalid_type_error: "Date of Birth is required",
    })
    .min(1, "Date of Birth is required"),

  street: z
    .string({
      required_error: "Street address is required",
      invalid_type_error: "Street address is required",
    })
    .min(1, "Street address is required"),

  city: z
    .string({
      required_error: "City is required",
      invalid_type_error: "City is required",
    })
    .min(1, "City is required"),

  state: z
    .string({
      required_error: "State is required",
      invalid_type_error: "State is required",
    })
    .min(1, "State is required"),

  zip: z
    .string({
      required_error: "Zip code is required",
      invalid_type_error: "Zip code is required",
    })
    .min(1, "Zip code is required")
    .regex(/^\d+$/, "Zip code must contain only numbers"),

  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number is required",
    })
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Invalid email address"),

  ndis: z
    .string({
      required_error: "NDIS number is required",
      invalid_type_error: "NDIS number is required",
    })
    .min(1, "NDIS number is required"),

  fundManaged: z.string().optional(),

  planManager: z.string().optional(),

  service: z.string().optional(),

  comments: z.string().optional(),

  recommend: z
    .string({
      required_error: "Please select recommendation option",
      invalid_type_error: "Please select recommendation option",
    })
    .min(1, "Please select recommendation option"),

  referrerType: z
    .string({
      required_error: "Please select referrer type",
      invalid_type_error: "Please select referrer type",
    })
    .min(1, "Please select referrer type"),

    consentStatement1: z.literal(true, {
      errorMap: () => ({
        message:
          "You must acknowledge that submitting this form does not guarantee access to WCC services.",
      }),
    }),
    
    consentStatement2: z.literal(true, {
      errorMap: () => ({
        message:
          "You must acknowledge that the information provided will remain confidential and used internally by WCC.",
      }),
    }),
    

  references: z.array(
    z.object({
      name: z.string().optional(),
      address: z.string().optional(),
      contact: z.string().optional(),
    })
  ),

  refId: z.string().optional(),
});

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzNAiRYO5Oj5WF9QM6ujxXE7t6GBtLQOb6NbHY2CxrBBeg6DiOEWA1KR0z0CRwouPdnXw/exec";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nextRefId, setNextRefId] = useState("");

  const defaultValues = {
    refId: "",
    referrerType: "",
    firstName: "",
    lastName: "",
    dob: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    ndis: "",
    fundManaged: "",
    planManager: "",
    service: "",
    comments: "",
    recommend: "Maybe",
    references: [
      { name: "", address: "", contact: "" },
      { name: "", address: "", contact: "" },
    ],
    consentStatement1: false,
    consentStatement2: false,
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields } = useFieldArray({ control, name: "references" });

  // Fetch next Ref ID from Apps Script
  useEffect(() => {
    async function fetchRefId() {
      try {
        const res = await axios.get(SCRIPT_URL);
        if (res.data?.nextRefId) {
          setValue("refId", res.data.nextRefId);
        }
      } catch (err) {
        console.error("Failed to fetch Ref ID:", err);
      }
    }
    fetchRefId();
  }, [setValue]);

  // ✅ Auto-scroll to first error
  useEffect(() => {
    const findErrorField = (errorsObj, parentKey = "") => {
      for (const key in errorsObj) {
        const field = parentKey ? `${parentKey}.${key}` : key;

        if (errorsObj[key]?.message) return field;

        if (typeof errorsObj[key] === "object") {
          const nested = findErrorField(errorsObj[key], field);
          if (nested) return nested;
        }
      }
      return null;
    };

    const firstErrorField = findErrorField(errors);

    if (firstErrorField) {
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
    }
  }, [errors]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(
          key,
          Array.isArray(value) ? JSON.stringify(value) : value ?? ""
        );
      });

      const response = await axios.post(SCRIPT_URL, formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.data.status === "success") {
        alert(`Form submitted successfully! Ref ID: ${response.data.refId}`);
        reset(defaultValues);
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          New Participant Referral Form
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* ---------- FULL FORM BLOCK (all your existing code) ---------- */}
          {/* Referrer Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              I am *
            </label>
            <select
              {...register("referrerType")}
              className={`mt-1 w-full border ${
                errors.referrerType ? "border-red-500" : "border-gray-300"
              } rounded-md p-2`}
              defaultValue=""
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="self">I am referring myself</option>
              <option value="someone">I am referring someone else</option>
            </select>
            {errors.referrerType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.referrerType.message}
              </p>
            )}
          </div>

          {/* Reference ID
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference ID
            </label>
            <input
              {...register("refId")}
              readOnly
              
              className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div> */}

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                {...register("firstName")}
                className={`mt-1 w-full border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                {...register("lastName")}
                className={`mt-1 w-full border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth *
            </label>
            <input
              type="date"
              {...register("dob")}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
             {errors.dob && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dob.message}
                </p>
              )}
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Address *
            </label>
            <input
              {...register("street")}
              className={`w-full border ${
                errors.street ? "border-red-500" : "border-gray-300"
              } rounded-md p-2`}
              placeholder="Street Address"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("city")}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="City"
              />

              {/* State Dropdown */}
              <select
                {...register("state", {
                  required: "State / Territory is required",
                })}
                className={`w-full border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 bg-white`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select State / Territory
                </option>
                <option value="NSW">New South Wales</option>
                <option value="VIC">Victoria</option>
                <option value="QLD">Queensland</option>
                <option value="WA">Western Australia</option>
                <option value="SA">South Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="ACT">Australian Capital Territory</option>
                <option value="NT">Northern Territory</option>
              </select>
            </div>

            <input
              {...register("zip")}
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2"
              placeholder="Postal / Zip Code"
            />
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                {...register("phone")}
                className={`mt-1 w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail *
              </label>
              <input
                {...register("email")}
                className={`mt-1 w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
                {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* NDIS & Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NDIS number *
              </label>
              <input
                {...register("ndis")}
                className={`mt-1 w-full border ${
                  errors.ndis ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
               {errors.ndis && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.ndis.message}
                </p>
              )}

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fund Managed by
              </label>
              <select
                {...register("fundManaged")}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white"
              >
                <option value="">Please Select</option>
                <option value="NDIA Managed">NDIA Managed</option>
                <option value="Plan Managed">Plan Managed</option>
                <option value="Self Managed">Self Managed</option>
              </select>
            </div>
          </div>

          {/* Plan Manager & Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Plan Manager's Details
              </label>
              <input
                {...register("planManager")}
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Service looking for
              </label>
              <select
                {...register("service")}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white"
              >
                <option value="">Please Select</option>
                <option value="Support Coordination">
                  Support Coordination
                </option>
                <option value="Support Independent Living">
                  Support Independent Living
                </option>
                <option value="Community Support">Community Support</option>
              </select>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Comments
            </label>
            <textarea
              {...register("comments")}
              className="mt-1 w-full border border-gray-300 rounded-md p-4 h-32"
            />
          </div>

          {/* Recommendation Radios */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Will you be willing to recommend us?
            </label>
            <div className="flex space-x-4">
              {["Yes", "No", "Maybe"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={opt}
                    {...register("recommend")}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            {errors.recommend && (
              <p className="text-red-500 text-xs">{errors.recommend.message}</p>
            )}
          </div>

          {/* References Table */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              References:
            </label>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-gray-700 border-b">
                  <tr>
                    <th className="p-2 border-r">#</th>
                    <th className="p-2 border-r">Full Name</th>
                    <th className="p-2 border-r">Address</th>
                    <th className="p-2">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field, idx) => (
                    <tr key={field.id} className="border-b">
                      <td className="p-2 border-r bg-slate-50 text-center font-bold">
                        {idx + 1}
                      </td>
                      <td className="p-1 border-r">
                        <input
                          {...register(`references.${idx}.name`)}
                          className="w-full p-1 focus:outline-none bg-transparent"
                        />
                      </td>
                      <td className="p-1 border-r">
                        <input
                          {...register(`references.${idx}.address`)}
                          className="w-full p-1 focus:outline-none bg-transparent"
                        />
                      </td>
                      <td className="p-1">
                        <input
                          {...register(`references.${idx}.contact`)}
                          className="w-full p-1 focus:outline-none bg-transparent"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Consent for Request for Service
            </h3>
            <p className="text-gray-700 mb-2">
              To help WCC process your enquiry, please acknowledge each
              statement below:
            </p>

{/* Statement 1 */}
<div className="mb-4 flex items-center space-x-2">
  <input
    type="checkbox"
    {...register("consentStatement1", { valueAsBoolean: true })}
    id="consentStatement1"
    className="w-4 h-4"
  />
  <label
    htmlFor="consentStatement1"
    className="text-gray-700 text-sm cursor-pointer"
  >
    * Submitting this form does not guarantee access to WCC services.
  </label>
</div>
{errors.consentStatement1 && (
  <p className="text-red-500 text-sm mt-1">
    Please acknowledge the consent.
  </p>
)}

{/* Statement 2 */}
<div className="mb-4 flex items-center space-x-2">
  <input
    type="checkbox"
    {...register("consentStatement2", { valueAsBoolean: true })}
    id="consentStatement2"
    className="w-4 h-4"
  />
  <label
    htmlFor="consentStatement2"
    className="text-gray-700 text-sm cursor-pointer"
  >
    * Information provided will remain confidential within WCC and used internally to coordinate appropriate support services.
  </label>
</div>
{errors.consentStatement2 && (
  <p className="text-red-500 text-sm mt-1">
    Please acknowledge the consent.
  </p>
)}


          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-400" : "bg-[#0a1144]"
              } text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-blue-900 transition-colors`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;