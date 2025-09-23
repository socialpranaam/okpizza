import React from 'react';
import sunriseEffect from '../assets/images/design1.png';

const QualitySection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(qualityImg.jpg)' }}>
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <div className="text-white px-4">
          <img
            src={sunriseEffect}
            alt="sunrise effect lines"
            className="block mx-auto mb-3 h-26 w-32 md:w-40"
          />
          <h1 className="text-4xl md:text-8xl leading-tight mb-4 bebas-neue-regular">
            EXCELLENT TASTE, <br /> TOP QUALITY
          </h1>
          <p className="text-xl md:text-4xl mb-8 pacifico-regular">
            we put 100% of love and dedication into our dishes
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
