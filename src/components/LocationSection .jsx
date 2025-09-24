 import { Locate, MapIcon, MapPin } from 'lucide-react';
import React from 'react';

const LocationSection = () => {
  return (
    <div className="flex items-center justify-between p-8-200 h-screen">
      {/* Left Section (Text and Button) */}
      <div className="w-1/2 h-full text-center bg-[#CFDF5A] flex flex-col justify-center items-center">
        <p className="text-4xl font-serif mb-4 leading-relaxed pacifico-regular">
          Call +1 123 345 678 <br /> or fill out the booking form
        </p>
        <button className="border-2 py-2 my-3 px-6 rounded-full text-3xl bebas-neue-regular hover:bg-zinc-800 hover:text-yellow-500 transition duration-300">
          BOOK A TABLE
        </button>
      </div>

      {/* Right Section (Image and Address) */}
      <div className="w-1/2 h-full relative flex flex-col justify-center items-center" style={{ backgroundImage: 'url(locationSectionImg.jpg)' }}>
        <MapPin size={70} className='text-white'/>
         <p className="text-4xl font-serif mb-4 leading-relaxed pacifico-regular text-white text-center">
          2 bis, rue Neuve-Popincourt <br />
75011 Paris
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
