import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Our Supported Independent Living services provide a safe, comfortable, and supportive environment.",
    name: "Holden Caulfield",
    role: "UI DEVELOPER",
    avatar: "https://dummyimage.com/106x106",
  },
  {
    text: "We empower you to live with greater independence and achieve your personal goals.",
    name: "Alper Kamu",
    role: "DESIGNER",
    avatar: "https://dummyimage.com/107x107",
  },
  {
    text: "We provide tailored support to meet individual needs and ensure your comfort.",
    name: "Jane Doe",
    role: "PROJECT MANAGER",
    avatar: "https://dummyimage.com/108x108",
  },
  {
    text: "Our team helps you build connections, participate in community, and grow skills.",
    name: "John Smith",
    role: "DEVELOPER",
    avatar: "https://dummyimage.com/109x109",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    const step = isDesktop ? 2 : 1;
    setIndex((prev) => (prev + step) % testimonials.length);
  };

  const prev = () => {
    const step = isDesktop ? 2 : 1;
    setIndex((prev) => (prev - step + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = isDesktop
    ? [
        testimonials[index % testimonials.length],
        testimonials[(index + 1) % testimonials.length],
      ]
    : [testimonials[index % testimonials.length]];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center relative">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#333333] mb-16">
          Testimonials
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 bg-[#2d4699] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-700"
          >
            ‹
          </button>

          {/* Testimonials */}
          <div className="flex gap-6 w-full justify-center overflow-hidden py-5 px-20   ">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className="transition-opacity duration-700 ease-in-out md:w-1/2 w-full"
              >
                <div className="bg-gray-100 p-8 rounded h-full flex flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">{t.text}</p>
                  <a className="inline-flex items-center">
                    <img
                      alt={t.name}
                      src={t.avatar}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {t.name}
                      </span>
                      <span className="text-gray-500 text-sm">{t.role}</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-20 bg-[#2d4699] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-700"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
