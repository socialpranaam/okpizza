import React from 'react';
import logo from '../assets/images/pizza-logo-footer.png'
import { Facebook, Instagram, LucideTwitch, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-18 px-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Pizza Logo"
          className="w-36 h-auto mb-12"
        />

        {/* Navigation Links */}
        <div className="flex space-x-10 text-lg pacifico-regular">
          <a href="#" className="hover:underline">
            Reservations
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
          <a href="#" className="hover:underline">
            Menu
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4  text-zinc-900">
          <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600">
             <Twitter size={25}/>
          </a>
          <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600">
            <Facebook size={25}/>
          </a>
          <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600">
           <Instagram size={25}/>
          </a>
          <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600">
            <LucideTwitch/>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-zinc-700 mt-6"></div>

        {/* Bottom Text */}
        <div className="text-sm text-center lg:mt-4 px-4">
          <span className="font-semibold roboto-slab-small">Privacy Policy</span> / This is a sample website - cmsmasters © 2025 / All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
