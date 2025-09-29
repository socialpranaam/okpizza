import React, {useRef} from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: 'November 23, 2015',
    title: 'THE NEW PANINI SPOT IS OPENED!',
    img: event1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
  },
  {
    date: 'November 20, 2015',
    title: 'TOP 15 BEST RESTAURANTS',
    img: event2,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
  },
  {
    date: 'November 10, 2015',
    title: "CHEF’S PICK: BRAND NEW TASTE",
    img: event3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
  },
  {
    date: 'November 10, 2015',
    title: "CHEF’S PICK: BRAND NEW TASTE",
    img: event4,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
  },
];

const NewsEventsSlider = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 639 });
   const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isDesktop ? 3 : isTablet ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-30 text-white " style={{ backgroundImage: 'url(newsEventBgImg.jpg)' }}>
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-6xl font-bold text-center mb-2 bebas-neue-regular">NEWS & EVENTS</h2>
        <p className="text-center text-orange-500 italic text-3xl mb-10 py-4 pacifico-regular">
          There’s always something interesting down here
        </p>

        <Slider ref={sliderRef} {...settings}>
          {newsItems.map((item, idx) => (
            <div key={idx} className="px-4 py-8">
              <div className="rounded overflow-hidden">
                <p className="text-base text-white pacifico-regular">{item.date}</p>
                <h3 className="text-4xl font-semibold mb-3 text-lime-300 uppercase leading-tight bebas-neue-regular">
                  {item.title}
                </h3>
                <img src={item.img} alt={item.title} className="w-full h-65 object-cover" />
                <div className="py-4">
                  <p className="text-gray-300 text-sm mt-2 roboto-slab-small">{item.desc}</p>
                  <p className="mt-3 text-white font-bold italic underline cursor-pointer pacifico-regular">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Arrows Centered Horizontally Below */}
          <div className="absolute -bottom-6 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
            <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
          </div>
      </div>
    </section>
  );
};
// Arrow Component
const Arrow = ({ direction, onClick }) => (
  <div
    className="bg-zinc-800 hover:bg-zinc-700 border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <span className="text-white text-xl">
      {direction === "left" ? <ArrowLeft size={18}/> : <ArrowRight size={18}/> }
    </span>
  </div>
);

export default NewsEventsSlider;
