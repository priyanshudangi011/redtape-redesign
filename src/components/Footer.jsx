// Footer.jsx
import React from 'react';
import { Heart, UserCircle, ShoppingBag, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">About RedTape</h2>
          <p className="text-gray-400">
            RedTape brings the best footwear and accessories for your lifestyle. 
            Quality products, trend-setting designs.
          </p>
        </div>

     
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Shop</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white transition">About</a>
        </div>

 
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-gray-400 flex items-center gap-2">
            <Mail size={20} /> info@redtape.com
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <UserCircle size={20} /> +91 12345 67890
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <ShoppingBag size={20} /> Mon - Sat, 10am - 7pm
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} RedTape. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
