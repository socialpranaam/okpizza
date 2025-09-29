import { MapPin } from 'lucide-react';
import React from 'react';

const LocationSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section (Text and Map) */}
      <div className="flex-1 text-center bg-[#CFDF5A] flex flex-col justify-center items-center px-6 py-10">
        <p className="text-3xl md:text-4xl font-serif mb-6 leading-relaxed pacifico-regular">
          Call +1 123 345 678 <br /> or fill out the booking form
        </p>
        <button className="border-2 py-2 my-3 px-6 rounded-full text-2xl md:text-3xl bebas-neue-regular hover:bg-zinc-800 hover:text-yellow-500 transition duration-300">
          BOOK A TABLE
        </button>

        {/* Responsive iframe wrapper */}
        <div className="w-full mt-8 aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.0196915223173!2d81.00738417522275!3d26.86786197667389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be295be3524a9%3A0x329fad3755217788!2sLevana%20Cyber%20Heights!5e1!3m2!1sen!2sin!4v1759136483481!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Section (Image and Address) */}
      <div
        className="flex-1 relative flex flex-col justify-center items-center px-6 py-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(locationSectionImg.jpg)' }}
      >
        <MapPin size={70} className="text-white mb-4" />
        <p className="text-2xl md:text-4xl font-serif leading-relaxed pacifico-regular text-white text-center">
          2 bis, rue Neuve-Popincourt <br />
          75011 Paris
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
