import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

// 1. Define the Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required (min 2 chars)"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

function Form() {
  // 2. Initialize useForm with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // 3. Handle Form Submission with Axios
  const onSubmit = async (data) => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybtrK9qZTb47gXLeaQiim5yxZsqeaCLm-g7x3zcHn9ua7HNdBHqx9yitATnCY-p9jonw/exec";

    try {
      // Using Axios for the POST request
      // Note: Google Apps Script requires 'Content-Type': 'text/plain' or no-cors to avoid preflight issues
      await axios.post(SCRIPT_URL, JSON.stringify(data), {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });

      alert("Message sent successfully!");
      reset(); // Clears the form fields
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Well-managed navigation
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 border border-gray-100 rounded-xl shadow-md p-8 md:p-12 my-6 bg-white">
      <h2 className="text-4xl font-bold text-slate-800 mb-8">Send a Message</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <input 
              type="text" 
              placeholder="Full Name *" 
              className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-blue-500 outline-none border ${errors.name ? 'border-red-500' : 'border-transparent'}`}
              {...register("name")}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <input 
              type="tel" 
              placeholder="Phone Number *" 
              className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-blue-500 outline-none border ${errors.phone ? 'border-red-500' : 'border-transparent'}`}
              {...register("phone")}
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input 
            type="email" 
            placeholder="Email Address *" 
            className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-blue-500 outline-none border ${errors.email ? 'border-red-500' : 'border-transparent'}`}
            {...register("email")}
          />
          {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea 
            placeholder="Message *" 
            rows="6"
            className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none border ${errors.message ? 'border-red-500' : 'border-transparent'}`}
            {...register("message")}
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
        </div>

        <div className="flex justify-end mt-6">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`${isSubmitting ? 'bg-gray-400' : 'bg-[#3b519d]'} text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;