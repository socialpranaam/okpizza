import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const MobileMenu = ({ isOpen, navItems }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeMenu, setActiveMenu] = useState('home');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {isOpen && (
        <div className="h-auto w-full bg-zinc-800 text-white p-4">
          {navItems.map((item, index) => (
            <div key={item.id} className="border-b border-gray-700">
              {/* Main item */}
              <button
                className="w-full flex items-center justify-between py-3 text-left font-bold uppercase"
               onClick={() => {
  item.subItems ? toggleAccordion(index) : null;
  setActiveMenu(item.id);
}}

              >
                <div className="flex items-center gap-2 bebas-neue-regular">
                  <span className={` hover:text-[#CFDF5A] text-2xl ${activeMenu == item.id ? 'text-[#CEDF5A]': 'text-white'} `}> {item.label}</span>
                  {item.isHot && (
                    <span className="bg-red-400 text-white text-sm px-2 py-0.5 rounded pacifico-regular">
                      Hot!
                    </span>
                  )}
                </div>
                {item.subItems && (
                  <span>
                    {openIndex === index ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </span>
                )}
              </button>

              {/* Sub menu */}
              {item.subItems && openIndex === index && (
                <div className="pl-6 pb-3 text-sm space-y-3 roboto-slab-small">
                  {item.subItems.map((sub, i) => (
                    <div
                      key={i}
                      className="text-gray-300 hover:text-lime-400 cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
