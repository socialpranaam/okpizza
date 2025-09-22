import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PizzaSlider from './PizzaSlider';


const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/heroBackground.jpg')" }} // Replace with actual path
    >
      <h1 className="text-5xl md:text-6xl font-bold  uppercase tracking-wide tracking-tighter">
        Welcome to Pizza!
      </h1>
      <h2 className="text-xl md:text-2xl text-lime-300 font-semibold mt-4 font-[cursive]">
        Family Café & Pizzeria
      </h2>
      <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
        Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
        and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea
        to the level...
      </p>
      <div className='mx-auto'>
<PizzaSlider />
      </div>
      
    </div>
  );
};

export default About;
