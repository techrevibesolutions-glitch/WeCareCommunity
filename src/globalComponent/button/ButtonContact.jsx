import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

function ButtonContact({ number }) {
  return (
    /* Using fixed padding and text size (no md: or sm: prefixes) 
       to ensure it stays the same on all devices.
    */
    <button className='flex items-center justify-center rounded-xl bg-[#2c59a3] text-white px-6 py-3 font-bold text-lg hover:bg-blue-600 transition-colors shadow-md shrink-0 whitespace-nowrap '>
      {/* Icon with fixed margin */}
      <FaPhoneAlt className='mr-3 text-base' />
      
      {/* The number wrapped in a span to keep it on one line */}
      <span>{number}</span>
    </button>
  );
}

export default ButtonContact;