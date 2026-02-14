import React from 'react';
import { Link } from 'react-router-dom';

const NDISProcess = () => {
  const steps = [
    {
      title: "Check if you are eligible.",
      description: "Make sure you qualify for the NDIS before applying. Find qualifying criteria on the NDIS website or by contacting them.",
      icon: (
        <svg className="w-16 h-16 text-[#2d4699]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm6.29-2.71L17 12.58l-1.29-1.29-1.42 1.41 2.71 2.71 4.71-4.71-1.42-1.41z" />
        </svg>
      )
    },
    {
      title: "NDIS Access Request Form",
      description: "If you believe you qualify for the NDIS, call 1800-800-110 to get an Access get Form.",
      icon: (
        <svg className="w-16 h-16 text-[#2d4699]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      )
    },
    {
      title: "Attend Meeting",
      description: "NDIS representatives will invite you to a planning meeting if your application is approved.",
      icon: (
        <svg className="w-16 h-16 text-[#2d4699]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5V12c0 1.38-1.12 2.5-2.5 2.5h-5c-1.38 0-2.5-1.12-2.5-2.5v-1.5zM2 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm1.5 0c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5z" />
          <path d="M19.5 10c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#333333] mb-16">
          How to Get to Our NDIS Services
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-6 px-4">
              {/* Icon Wrapper */}
              <div className="h-20 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-800">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <Link to="/services">
            <button className="bg-[#2d4699] hover:bg-[#21336a] text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 uppercase text-xs tracking-[0.2em]">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NDISProcess;