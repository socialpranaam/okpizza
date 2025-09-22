import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-[3vw] lg:px-[3vw] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          <img
            src="pizzaLogo.png"
            alt="websiteLogo"
            className={`${scrolled ? "h-25" : "h-auto"}`}
          />
        </div>

        {/* Menu */}
        <ul className="flex text-white font-semibold text-xl">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`hover:text-lime-400 transition uppercase px-7 tracking-tighter cursor-pointer ${
                  index != 0 ? "border-l border-dashed border-white" : ""
                }`}
              >
                {item.label}
                {item.isHot && (
                <span className=" ml-2 bg-orange-500 text-white text-xl font-semibold px-3 font-[cursive] capitalize hover:bg-lime-400 hover:text-black ">
                  Hot!
                </span>
              )}
              </button>
              
            </li>
          ))}
        </ul>

        {/* search icon and  Button */}
        <div className="flex justify-center items-center gap-5 text-white">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl hover:text-lime-400 cursor-pointer"
          />
          <button className="border-2 border-white px-6 py-2 rounded-full text-white hover:bg-lime-400 hover:text-black transition text-xl font-semibold tracking-tighter uppercase cursor-pointer">
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
}
