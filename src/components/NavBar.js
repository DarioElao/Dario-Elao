import React, { useState } from 'react';
import About from './About';
import { SlUser, SlHome, SlLayers, SlPaperClip, SlPaperPlane } from 'react-icons/sl';
import { Link } from 'react-scroll';
import Hero from './Hero';

const NavBar = () => {

  return (
 <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
        <div className='bg-black/80 h-60px rounded-lg max-w-[460px] mx-auto px-5 flex justify-between items-center text-white'>
          <Link  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-150 duration-200'>
            <SlHome />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-150 duration-200'>
            <SlUser />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-150 duration-200'>
            <SlLayers />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-150 duration-200'>
            <SlPaperClip />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-150 duration-200'>
            <SlPaperPlane />
          </Link>
        </div>
    </div>
 </nav>
  );
};

export default NavBar;
