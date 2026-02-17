import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// Validation Schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").or(z.string().length(0)),
  ndis: z.string().min(1, "NDIS number is required"),
  fundManaged: z.string().optional(),
  planManager: z.string().optional(),
  service: z.string().optional(),
  comments: z.string().optional(),
  recommend: z.enum(["Yes", "No", "Maybe"]),
  referrerType: z.enum(["", "self", "someone"]),
  consentStatement1: z.boolean().refine((val) => val === true),
  consentStatement2: z.boolean().refine((val) => val === true),
  references: z.array(
    z.object({
      name: z.string().optional(),
      address: z.string().optional(),
      contact: z.string().optional(),
    })
  ),
  refId: z.string(),
});

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzNAiRYO5Oj5WF9QM6ujxXE7t6GBtLQOb6NbHY2CxrBBeg6DiOEWA1KR0z0CRwouPdnXw/exec";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nextRefId, setNextRefId] = useState("");

  // Default form values
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



// Fetch next Ref ID from Apps Script
useEffect(() => {
  async function fetchRefId() {
    try {
      const res = await axios.get(SCRIPT_URL); // doGet returns { nextRefId }
      if (res.data?.nextRefId) {
        setValue("refId", res.data.nextRefId); // ⚡ Correct way
      }
    } catch (err) {
      console.error("Failed to fetch Ref ID:", err);
    }
  }
  fetchRefId();
}, [setValue]);

  const { fields } = useFieldArray({ control, name: "references" });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value ?? "");
      });

      const response = await axios.post(SCRIPT_URL, formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.data.status === "success") {
        alert(`Form submitted successfully! Ref ID: ${response.data.refId}`);
        reset({
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
          recommend: "",
          consentStatement1: "",
          consentStatement2: "",
          references: [
            { name: "", address: "", contact: "" },
            { name: "", address: "", contact: "" }
          ],
          referrerType: "",
          status: "",
          subStatus: "",
          remarks: "",
        });
      
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
                E-mail
              </label>
              <input
                {...register("email")}
                className={`mt-1 w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
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
              To help BGF process your enquiry, please acknowledge each
              statement below:
            </p>

            {/* Statement 1 */}
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="checkbox"
                {...register("consentStatement1", {
                  required: "Please acknowledge statement 1",
                })}
                id="consentStatement1"
                className="w-4 h-4"
              />
              <label
                htmlFor="consentStatement1"
                className="text-gray-700 text-sm cursor-pointer"
              >
                * Submitting this form does not guarantee access to BGF
                services.
              </label>
            </div>
            {errors.consentStatement1 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consentStatement1.message}
              </p>
            )}

            {/* Statement 2 */}
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="checkbox"
                {...register("consentStatement2", {
                  required: "Please acknowledge statement 2",
                })}
                id="consentStatement2"
                className="w-4 h-4"
              />
              <label
                htmlFor="consentStatement2"
                className="text-gray-700 text-sm cursor-pointer"
              >
                * Information provided will remain confidential within BGF and
                used internally to coordinate appropriate support services.
              </label>
            </div>
            {errors.consentStatement2 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consentStatement2.message}
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