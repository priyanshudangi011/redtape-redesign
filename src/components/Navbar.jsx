import React from 'react';
import { Heart, Search, UserCircle, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4">
      <div>
        <img className='h-8' src="/redtape logo.webp" alt="logo" />
      </div>

      <div className='flex gap-2 items-center'>
        <input
          className='text-xl border-gray-500 px-4  pt-2 pb-2 border-2 rounded-xl'
          type="search"
          placeholder='search for.....'
        />
        <Search color="#E31E25" size={30} />
      </div>

      <div className='flex gap-8 items-center'>
        <Heart size={24} />
        <UserCircle size={24} />
        <ShoppingBag size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
