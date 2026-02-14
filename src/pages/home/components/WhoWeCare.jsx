import React from 'react';
import img from '../../../assets/hero/plan.png'

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 not-first-of-type: ">
      <div className="max-w-5xl   mx-auto flex flex-col-reverse  items-start md:flex-row  gap-8 justify-center">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 ">
          <h2 className="text-4xl font-serif font-bold text-gray-800">
            Who We Are
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed ">
            <p>

             As a registered NDIS provider based in NSW,
              We Care Community supports people with disabilities through personalized services that promote greater access to the community.
               We believe everyone deserves the opportunity to participate, belong, and thriving no matter their abilities.
            </p>
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-blue-500 font-semibold">
            <a href="/services" className="hover:underline">Learn More</a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-600">Contact Us</span>
            <a href="tel:1800371070" className="hover:underline">1800 371 070</a>
          </div>
        </div>

        {/* Right Side: Image with Vertical Badge */}
        <div className="flex relative justify-center">
          <div className="relative overflow-hidden">
            <img 
              src={img} 
              alt="Student drawing" 
              className="w-100% h-100% object-cover rounded-[40px]"
            />
            
            {/* Vertical Blue Badge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#6A2875] text-white px-3 py-6 flex items-center justify-center">
              <span 
                className="whitespace-nowrap font-bold text-xl tracking-wide" 
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Registered NDIS Provider
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;