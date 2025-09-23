import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import pizzaImage1 from "../assets/images/pizza1.jpg";
import pizzaImage2 from "../assets/images/pizza2.jpg";
import pizzaImage3 from "../assets/images/pizza3.jpg";
import pizzaImage4 from "../assets/images/pizza4.jpg";
import pizzaImage5 from "../assets/images/pizza5.jpg";
import pizzaImage6 from "../assets/images/pizza6.jpg";
import pizzaImage7 from "../assets/images/pizza7.jpg";
import pizzaImage8 from "../assets/images/pizza8.jpg";
import pizzaImage9 from "../assets/images/pizza9.jpg";

const About = () => {
  const sliderRef = useRef(null);

  const pizzas = [
    { name: "Spicy Veg Trio", img: pizzaImage1 },
    { name: "Cheesy Garlic Pizza", img: pizzaImage2 },
    { name: "Loaded Meatlovers", img: pizzaImage3 },
    { name: "Paneer Delight", img: pizzaImage4 },
    { name: "Farmhouse Feast", img: pizzaImage5 },
    { name: "Mexican Green Wave", img: pizzaImage6 },
    { name: "Mexican Green Wave", img: pizzaImage7 },
    { name: "Loaded Meatlovers", img: pizzaImage8 },
    { name: "Loaded Meatlovers", img: pizzaImage9 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // ✅ Enables center mode
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="py-28 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 lg:px-[10vw] overflow-x-hidden"
        style={{ backgroundImage: "url('/heroBackground.jpg')" }}
      >
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wide bebas-neue-regular">
          Welcome to Pizza!
        </h1>
        <h2 className="text-xl md:text-2xl text-lime-300 font-semibold mt-4 pacifico-regular">
          Family Café & Pizzeria
        </h2>
        <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
          and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea
          to the level...
        </p>

        {/* Pizza Slider */}
        <div className="w-full mt-16 relative py-10">
          <Slider ref={sliderRef} {...sliderSettings}>
            {pizzas.map((pizza, index) => (
              <div key={index} className="px-4">
  <div className="slide-inner transition-all duration-300 delay-150 ease-in-out border-transparent border-x-2 border-dashed slick-center:border-gray-400 py-4">
    <img
      src={pizza.img}
      alt={pizza.name}
      className="w-80 h-80 object-cover rounded-full shadow-xl mx-auto mb-5"
    />
    <h2 className="text-2xl text-lime-300 font-semibold pacifico-regular text-center">
      {pizza.name}
    </h2>
  </div>
</div>

            ))}
          </Slider>

          {/* Arrows Centered Horizontally Below */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
            <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>
      </div>
    </>
  );
};

// Arrow Component
const Arrow = ({ direction, onClick }) => (
  <div
    className="bg-zinc-800 hover:bg-zinc-700 border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <span className="text-white text-xl">
      {direction === "left" ? "←" : "→"}
    </span>
  </div>
);

export default About;
