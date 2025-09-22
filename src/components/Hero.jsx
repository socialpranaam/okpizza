import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/crousel1.jpg";
import img2 from "../assets/images/carousel2.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "FREE PIZZA DELIVERY",
    subtitle: "We care about our customers!",
    animation: "fade",
  },
  {
    id: 2,
    image: img2,
    title: "HOT & FRESH PIZZA",
    subtitle: "Best quality ingredients only.",
    animation: "up",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text directly on image */}
          <div className="flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 transform transition-all duration-700 delay-200
                ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {slide.title}
            </h1>
            <p
              className={`text-lg md:text-2xl bg-orange-500/80 px-4 py-2 rounded-md inline-block transform transition-all duration-700 delay-500
                ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white z-30"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
