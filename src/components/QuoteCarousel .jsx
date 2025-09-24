import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { QuoteIcon } from 'lucide-react';


// Sample quotes data
const quotes = [
  {
    text: '"If you like unconventional pizza, this place is for you. Picturesque patio on a pedestrian square in the summer square in the summer."',
    source: 'THE GUARDIAN',
  },
  {
    text: '"A cozy spot with an incredible variety of pastas and pizzas. Every bite feels homemade and authentic square in the summer."',
    source: 'FOOD MAGAZINE',
  },
  {
    text: '"The perfect family-friendly cafe — warm atmosphere, friendly staff, and flavors that keep you coming back square in the summer."',
    source: 'CITY TIMES',
  },
  {
    text: '"From wood-fired pizzas to creamy desserts, this place knows how to balance taste and presentation square in the summer."',
    source: 'CULINARY JOURNAL',
  },
  {
    text: '"Not just a cafe, but an experience — whether you sit indoors or outside, the vibe is always delightful square in the summer."',
    source: 'TRAVEL WEEKLY',
  },
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(quotesBgImg.jpg)' }}>
      <div className="absolute inset-0 flex bg-black/50 items-center justify-center">
        <div className="w-4/5 max-w-4xl text-center px-4 py-8">
        <h1 className='text-6xl text-white mb-15 bebas-neue-regular'>WHAT THE PRESS SAYS</h1>
          <Slider {...settings}>
            {quotes.map((quote, index) => (
              <div key={index} className="text-white pacifico-regular">
                <QuoteIcon className='text-green mx-auto mb-20'/>
                 <p className="text-xl sm:text-2xl md:text-4xl font-light leading-relaxed">{quote.text}</p>
                <p className="mt-15 text-4xl font-bold text-white bebas-neue-regular">{quote.source}</p>
                <p className=' text-2xl font-bold text-lime-500 py-2'>website-example.com</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
