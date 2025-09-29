import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Menu, Search } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu", isHot: true },
  { id: "features", label: "Features" },
  { id: "shortcodes", label: "Shortcodes" },
  { id: "posttypes", label: "Post Types" },
  { id: "shop", label: "Shop" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`lg:fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-zinc-800 ${
        scrolled ? "lg:bg-zinc-800 shadow-md" : "lg:bg-transparent"
      }`}
    >
      <div className="px-[3vw] lg:px-[3vw] flex flex-col md:flex-row items-center justify-between py-8 lg:py-0">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          <img
            src="pizzaLogo.png"
            alt="websiteLogo"
            className={`${scrolled ? "lg:h-25" : "lg:h-auto"} h-40`}
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {/* mobile menu icon starts here */}
          <div className="lg:hidden md:flex text-white md:order-2 py-4">
            <Menu size={30} />
          </div>
          {/* search icon and  Button */}
          <div className="flex justify-center items-center gap-5 text-white  md:order-1">
            <div className="hidden lg:flex">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xl hover:text-lime-400 cursor-pointer"
              />
            </div>
            <button className="border-1 lg:border-2 border-white my-4 md:my-0 px-6 py-2 rounded-full text-white hover:bg-lime-400 hover:text-black transition  font-semibold bebas-neue-regular text-2xl uppercase cursor-pointer">
              Book a Table
            </button>
          </div>
        </div>
      </div>
      {/* mobile search bar starts here */}
      <div className="lg:hidden lg:block flex  justify center items center">
          <input type="search" placeholder="search..."
      className="bg-[#CFDF5A] w-full py-4 px-6 text-xl text-black placeholder:text-black roboto-slab-small focus:outline-none"
      />
      <button className="text-black bg-[#CFDF5A] px-6"><Search/></button>
      </div>

      
    </nav>
  );
}
