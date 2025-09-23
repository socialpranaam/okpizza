import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/crousel1.jpg";
import img2 from "../assets/images/carousel2.jpg";
import design1 from "../assets/images/design2.png";
import design2 from "../assets/images/design3.png";
import design3 from "../assets/images/design4.png";
import design4 from "../assets/images/design1.png";
import design5 from "../assets/images/design1of2.png";
import left from "../assets/images/lines-left.png";
import right from "../assets/images/lines-right.png";

const slides = [
  {
    id: 1,
    image: img1,
    title1: "BRING PEOPLE",
    title2: "TOGETHER",
    subtitle: "We care about our customers!",
    animation: "fade",
  },
  {
    id: 2,
    image: img2,
    title1: "FREE PIZZA",
    title2: "DELIVERY",
    subtitle: "Best quality ingredients only.",
    animation: "up",
  },
  {
    id: 3,
    image: img1,
    title1: "BRING PEOPLE",
    title2: "TOGETHER",
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
      {/* Slides background only */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
      ${
        index === current
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }
    `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
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

      {/* Pagination with preview */}
      <div className="absolute bottom-6 w-full flex justify-center gap-4 z-30">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative group">
            {/* Dot */}
            <div
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
          ${
            current === index
              ? "bg-orange-500 scale-115"
              : "bg-white/60 hover:bg-white"
          }
        `}
            ></div>

            {/* Preview on hover */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
             transition-opacity duration-300 pointer-events-none"
            >
              <div className="w-24 h-16 rounded-md overflow-hidden shadow-lg border border-white">
                <img
                  src={slide.image}
                  alt={slide.title1}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
     {/* Hero animation area (designs + text overlay) */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-30 text-white">

  {/* Designs wrapper */}
  <div className="relative flex flex-col items-center">
    {/* Design images (background-ish) */}
    <img src={design4} alt="1st design" className="h-18 mb-2" />
    <div className="flex flex-row justify-center items-center">
        <img src={left} alt="1st design" className="" />
        <img src={design1} alt="1st design" className="h-30 mt-1" />
        <img src={right} alt="1st design" className="" />
    </div>

    <img src={design2} alt="2nd design" className="h-22" />
    <img src={design3} alt="3rd design" className="h-18" />
    <img src={design5} alt="3rd design" className="h-17 mt-2" />

    {/* Text overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-8xl mb-2 drop-shadow-lg">
        {slides[current].title1}
      </h1>
      <h1 className="text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg text-zinc-800">
        {slides[current].title2}
      </h1>
      <p className="text-lg md:text-3xl px-4 py-2 rounded-md inline-block drop-shadow-lg">
        {slides[current].subtitle}
      </p>
    </div>
  </div>
</div>

    </section>
  );
}
