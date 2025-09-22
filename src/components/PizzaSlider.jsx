// PizzaSlider.jsx
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your pizza images
import tandooriChicken from "../assets/images/pizza3.jpg";
import spicyVegTrio from "../assets/images/pizza3.jpg";
import cheesyGarlic from "../assets/images/pizza3.jpg";

const PizzaSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const pizzas = [
    { name: "Tandoori Chicken", img: tandooriChicken },
    { name: "Spicy Veg Trio", img: spicyVegTrio },
    { name: "Cheesy Garlic Pizza", img: cheesyGarlic },
  ];

  return (
    <div className="w-full flex  items-center gap-10">
      <Slider {...settings}>
        {pizzas.map((pizza, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-10">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="object-cover rounded-full"
            />
            <h2 className="text-xl text-lime-300 font-semibold mt-4">
              {pizza.name}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PizzaSlider;
