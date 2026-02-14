import React, { useState, useEffect } from "react";

const SimpleSlider = ({ images = [], heading = "Our Homes & Living Spaces", interval = 3000 }) => {
  const [current, setCurrent] = useState(0);


  // Auto-slide useEffect (existing)
  useEffect(() => {
    if (!images || images.length <= 1) return;
  
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
  
    return () => clearInterval(timer);
  }, [images, interval]);
  
  // Preload next and previous images
  useEffect(() => {
    if (!images || images.length <= 1) return;
  
    const nextIndex = (current + 1) % images.length;
    const prevIndex = (current - 1 + images.length) % images.length;
  
    [nextIndex, prevIndex].forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [current, images]);
  

  if (!images || images.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our comfortable and fully supported living environments.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-4xl h-96 mx-auto rounded-2xl overflow-hidden shadow-lg">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            loading={i === current ? "eager" : "lazy"} // <-- lazy loading
            className={`w-full h-full object-bottom object-cover absolute top-0 left-0 transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-20"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow flex items-center justify-center z-20"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleSlider;
