import React from 'react';

const NewsSection = () => {
  return (
    <div className="bg-[#CFDF5A] py-18 px-5 text-black flex flex-col md:flex-row justify-between items-center px-[3vw] lg:px-[12vw]">
        <div className='flex flex-col pl-5 '>
 <h2 className="text-6xl font-semibold mb-2 bebas-neue-regular">GET YOUR PIZZA DELIVERED!</h2>
      <p className="text-2xl mb-5 pacifico-regular">Enjoy our delicious dishes wherever you want</p>
        </div>
     
      <button className="hover:bg-black text-3xl border-3 border-black text-black hover:text-[#CFDF5A] font-bold mt-6 lg:mt-0 py-2 px-6 rounded-full hover:bg-black transition duration-300 bebas-neue-regular active:bg-black active:text-[#CFDF5A]">
        MAKE AN ORDER NOW!
      </button>
    </div>
  );
};

export default NewsSection;
