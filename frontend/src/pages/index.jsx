import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = ["/estadio.jpg", "/historia.jpg"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    // Limpiar el intervalo si el componente se desmonta
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // const imagen1 = (id: integer) => {};

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-64 md:h-96"
          />
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform cursor-pointer -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform cursor-pointer -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>
      <button className="absolute -translate-x-1/2 bottom-5 left-1/2 transform cursor-pointer flex gap-2 -translate-y-1/2 bg-blue-700 p-2 text-white pr-8 pl-8 rounded-full hover:bg-blue-400">
        El club
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
