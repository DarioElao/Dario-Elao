import React from 'react';
import Logo from '../assets/logo.svg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {RiLinkedinLine, RiGithubLine} from 'react-icons/ri'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto my-3 w-full overflow-hidden z-50'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[60px] lg:w-[75px]'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='flex gap-x-5'>
            <a className='text-2xl lg:text-3xl transition-transform duration-200 transform hover:-translate-y-1 hover:text-[#fdca00]' href='https://www.linkedin.com/in/dario-elao/'>
              <BsLinkedin />
            </a>
            <a className='text-2xl lg:text-3xl transition-transform duration-200 transform hover:-translate-y-1 hover:text-[#fdca00]' href='https://github.com/DarioElao'>
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
