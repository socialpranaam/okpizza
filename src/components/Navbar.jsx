import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Menu, Search, X } from "lucide-react";
import { div } from "framer-motion/client";
import MobileMenu from '../components/MobileMenu'

const navItems = [
  {
    id: "home",
    label: "Home",
    subItems: ["Pizza Restaurant", "Burger Restaurant"],
  },
  {
    id: "menu",
    label: "Menu",
    isHot: true,
    subItems: ["Menu Variant 1", "Menu Variant 2"],
  },
   {
    id: "features",
    label: "Features",
    subItems: [
      "About Us",
      "What Customers Say",
      "News",
      "Table Booking",
      "Contacts",
    ],
  },
  { id: "shortcodes",
    label: "Shortcodes",
    subItems: [
      "1",
      "2",
      "3",
    ],
  },
  { id: "posttypes", label: "Post Types" },
  { id: "shop", label: "Shop" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "backdrop-blur-md shadow-lg" : "lg:bg-transparent"
      }`}
    >
      <div className="px-[3vw] lg:px-[3vw] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          <img
            src="pizzaLogo.png"
            alt="websiteLogo"
            className={`${scrolled ? "lg:h-25" : "lg:h-30 mt-1"} h-22`}
          />
        </div>

        {/* Menu */}
        {/* Menu */}
        <ul className="hidden lg:flex text-white font-semibold text-xl">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`hover:text-lime-400 transition uppercase px-7 cursor-pointer bebas-neue-regular text-2xl ${
                  index !== 0 ? "border-l border-dashed border-gray-500" : ""
                }`}
              >
                {item.label}
                {item.isHot && (
                  <span className="ml-2 bg-[#e74c3c] text-white text-sm font-semibold px-3 pacifico-regular capitalize hover:bg-lime-400 hover:text-black">
                    Hot!
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-5">
          {/* mobile menu icon starts here */}
          <div className="lg:hidden md:flex text-white md:order-2 py-4"
          onClick={()=>setIsopen(!isopen)}
          >
            {isopen ? <X size={30}/> :<Menu size={30} />}
          </div>
          {/* search icon and  Button */}
          <div className="flex justify-center items-center gap-5 text-white  md:order-1">
            <div className="hidden lg:flex">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xl hover:text-lime-400 cursor-pointer"
              />
            </div>
            <button className="hidden md:flex border-1 lg:border-2 border-white my-4 md:my-0 px-6 py-2 rounded-full text-white hover:bg-lime-400 hover:text-black transition  font-semibold bebas-neue-regular text-2xl uppercase cursor-pointer">
              Book a Table
            </button>
          </div>
        </div>
      </div>
     {isopen && <MobileMenu isOpen={isopen} navItems={navItems} />}
          
      
    </nav>
  );
}
