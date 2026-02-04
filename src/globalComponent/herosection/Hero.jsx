import React from 'react'
import img from '../../assets/hero/about_hero.avif'
function Hero({ heading, para }) {
  return (
    <section className=" md:pt-14 relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.5), rgba(30, 64, 175, 0.7)), url(${img})`
        }}
      >

          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-6">
          {heading}
        </h1>
        <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          {para}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V120H1200V0C1000,100 200,100 0,0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero