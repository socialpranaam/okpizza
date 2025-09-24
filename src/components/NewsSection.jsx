import React from 'react';

const NewsSection = () => {
  return (
    <div className="bg-[#e74c3c] py-18 px-5 text-center text-white flex justify-between items-center px-[3vw] lg:px-[12vw]">
        <div className='flex flex-col items-start'>
 <h2 className="text-6xl font-semibold mb-2 bebas-neue-regular">GET YOUR PIZZA DELIVERED!</h2>
      <p className="text-2xl mb-5 pacifico-regular">Enjoy our delicious dishes wherever you want</p>
        </div>
     
      <button className="hover:bg-white text-3xl border-3 border-white text-white hover:text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition duration-300 bebas-neue-regular">
        MAKE AN ORDER NOW!
      </button>
    </div>
  );
};

export default NewsSection;
