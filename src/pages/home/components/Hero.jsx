import React from 'react'
import img from '../../../assets/hero/supportcordination.png'

function Hero() {
  
  return (
    
    
    <section className="mt-40  xl:mt-10 md:pt-40  py-10  sm:p-4 flex flex-col items-center justify-start px-6 overflow-hidden relative bg-white">
      
      {/* Soft Blue Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-10%,#e0e7ff_0%,#ffffff_50%)] lg:bg-[radial-gradient(circle_at_50%_-10%,#eef2ff_0%,#ffffff_45%)]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] leading-tight font-serif tracking-tight">
          Start Your Journey With <br />
          <span className="text-[#2c59a3]">We Care Community</span>
        </h1>

        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
          We Care Community offers person-centred support to help people with
          disabilities connect and thrive.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* The Grid Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none rounded-[40px] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        </div>

        {/* The Image - Height is restricted and object-cover crops top/bottom */}
        <div className="relative z-10 rounded-[40px] overflow-hidden border-[6px] border-white shadow-2xl shadow-blue-100 
                        h-[200px] sm:h-[280px] md:h-[320px] lg:h-[380px]">
          <img
            src={img}
            alt="Support Coordination"
            className="w-full h-full object-cover object-center" 
          />
        </div>
      </div>
    </section>

 
  )
}

export default Hero