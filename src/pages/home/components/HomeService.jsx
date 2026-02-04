import React from 'react';
import img1 from '../../../assets/hero/support_coordination.png'
import img2 from '../../../assets/hero/short_term_accommodation.png'
import img3 from '../../../assets/hero/in_home_support.png'
import { Link } from 'react-router-dom';
const HomeService = () => {
  const services = [
    {
      title: "Support Coordination",
      description: "Our goal is to help members get better at coordinating and adding support on their NDIS plans,",
      image: img1,
      link: "/services/supportcoordination"
    },
    {
      title: "Short-term Accommodation",
      description: "STA services offer a comfortable, temporary home where you can relax, enjoy fun activities, and make new friends.",
      image: img2,
      link: "/services/shortterm"
    },
    {
      title: "In-Home Support",
      description: "Designed to support your independence while ensuring you get the help you need with daily tasks.",
      image: img3,
      link: "/services/inhomesupport"
    }
  ];

  return (
    <section className="bg-white py-6 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-16">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-1 px-8 py-4 flex flex-col items-start text-left space-y-4 
                ${index !== 0 ? 'md:border-l border-gray-300' : ''}`}
            >
              <div className="flex flex-wrap  justify-center items-start gap-6">
                {/* Circular Image */}
                <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-block text-blue-800 font-bold text-sm hover:underline pt-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Link to="/services">
            <button className="bg-[#2d4699] hover:bg-[#21336a] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors uppercase text-sm tracking-widest">
              View Our All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeService;