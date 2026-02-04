import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

// 1. Define the Validation Schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dob: z.string().optional(),
  street: z.string().min(1, "Street address is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").or(z.string().length(0)),
  ndis: z.string().min(1, "NDIS number is required"),
  fundManaged: z.string().optional(),
  planManager: z.string().optional(),
  service: z.string().optional(),
  comments: z.string().optional(),
  recommend: z.enum(['Yes', 'No', 'Maybe'], { errorMap: () => ({ message: "Please select an option" })}),
  references: z.array(z.object({
    name: z.string().optional(),
    address: z.string().optional(),
    contact: z.string().optional(),
  }))
});

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '', lastName: '', dob: '', street: '', city: '', state: '', zip: '',
      phone: '', email: '', ndis: '', fundManaged: '', planManager: '', service: '',
      comments: '', recommend: 'Maybe',
      references: [{ name: '', address: '', contact: '' }, { name: '', address: '', contact: '' }]
    }
  });

  const { fields } = useFieldArray({ control, name: "references" });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUwNGpKdTgpPshi9tpXqXeFs8BCDrflyKa0F56pEsVEl0Kfhmcwo2R8Z_6JyyBrUh7-Q/exec";

  const onSubmit = async (data) => {
    setIsSubmitting(true);
  
    try {
      const formData = new URLSearchParams();
  
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value ?? "");
        }
      });
  
      const response = await axios.post(SCRIPT_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
  
      if (response.data.status === "success") {
        alert("Form submitted successfully!");
        reset();
      } else {
        alert("Error: " + response.data.message);
      }
  
    } catch (err) {
      console.error(err);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  
  const testData = { firstName: "Test", lastName: "User" };

axios.post(SCRIPT_URL, testData, {
  headers: { "Content-Type": "application/json" }
})
.then(res => console.log(res.data))
.catch(err => console.log(err.response || err));

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">New Participant Referral Form</h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Participant's Details:</h2>

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input {...register("firstName")} className={`mt-1 w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input {...register("lastName")} className={`mt-1 w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" {...register("dob")} className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Address *</label>
            <input {...register("street")} className={`w-full border ${errors.street ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} placeholder="Street Address" />
            <div className="grid grid-cols-2 gap-4">
              <input {...register("city")} className="w-full border border-gray-300 rounded-md p-2" placeholder="City" />
              <input {...register("state")} className="w-full border border-gray-300 rounded-md p-2" placeholder="State / Province" />
            </div>
            <input {...register("zip")} className="w-full md:w-1/2 border border-gray-300 rounded-md p-2" placeholder="Postal / Zip Code" />
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input {...register("phone")} className={`mt-1 w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input {...register("email")} className={`mt-1 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} />
            </div>
          </div>

          {/* NDIS & Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">NDIS number *</label>
              <input {...register("ndis")} className={`mt-1 w-full border ${errors.ndis ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fund Managed by</label>
              <select {...register("fundManaged")} className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white">
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
              <label className="block text-sm font-medium text-gray-700">Plan Manager's Details</label>
              <input {...register("planManager")} className="mt-1 w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service looking for</label>
              <select {...register("service")} className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white">
                <option value="">Please Select</option>
                <option value="Support Coordination">Support Coordination</option>
                <option value="Support Independent Living">Support Independent Living</option>
                <option value="Community Support">Community Support</option>
              </select>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
            <textarea {...register("comments")} className="mt-1 w-full border border-gray-300 rounded-md p-4 h-32" />
          </div>

          {/* Recommendation Radios */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Will you be willing to recommend us?</label>
            <div className="flex space-x-4">
              {['Yes', 'No', 'Maybe'].map((opt) => (
                <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" value={opt} {...register("recommend")} className="w-4 h-4 text-blue-600" />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            {errors.recommend && <p className="text-red-500 text-xs">{errors.recommend.message}</p>}
          </div>

          {/* References Table */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">References:</label>
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
                      <td className="p-2 border-r bg-slate-50 text-center font-bold">{idx + 1}</td>
                      <td className="p-1 border-r"><input {...register(`references.${idx}.name`)} className="w-full p-1 focus:outline-none bg-transparent" /></td>
                      <td className="p-1 border-r"><input {...register(`references.${idx}.address`)} className="w-full p-1 focus:outline-none bg-transparent" /></td>
                      <td className="p-1"><input {...register(`references.${idx}.contact`)} className="w-full p-1 focus:outline-none bg-transparent" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? 'bg-gray-400' : 'bg-[#0a1144]'} text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-blue-900 transition-colors`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;