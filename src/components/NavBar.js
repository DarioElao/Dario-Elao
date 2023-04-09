import React, { useState } from 'react';
import About from './About';
import { SlUser, SlHome, SlLayers, SlPaperClip, SlPaperPlane } from 'react-icons/sl';
import { Link } from 'react-scroll';
import Hero from './Hero';

const NavBar = () => {

  return (
 <nav className='fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
        <div className='nav h-[60px] rounded-lg max-w-[460px] mx-auto px-3 flex justify-between items-center text-black'>
          <Link  to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='btn cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-transform duration-200 transform hover:border-b-2 hover:border-black hover:-translate-y-1 rounded-lg'>
            <SlHome />
          </Link>
          <Link to='about'  
          activeClass='active'
          smooth={true}
          spy={true}
          className='btn cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-transform duration-200 transform hover:border-b-2 hover:border-black hover:-translate-y-1 rounded-lg'>
            <SlUser />
          </Link>
          <Link  to='tech' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='btn cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-transform duration-200 transform hover:border-b-2 hover:border-black hover:-translate-y-1 rounded-lg'>
            <SlLayers />
          </Link>
          <Link  to='projects' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='btn cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-transform duration-200 transform hover:border-b-2 hover:border-black hover:-translate-y-1 rounded-lg'>
            <SlPaperClip />
          </Link>
          <Link  to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='btn cursor-pointer w-[35px] h-[35px] flex items-center justify-center transition-transform duration-200 transform hover:border-b-2 hover:border-black hover:-translate-y-1 rounded-lg'>
            <SlPaperPlane />
          </Link>
        </div>
    </div>
 </nav>
  );
};

export default NavBar;
