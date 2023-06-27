import React from 'react';
import Logo from '../assets/logo.svg';
import {TiLocation, TiDevicePhone} from 'react-icons/ti'
import {TfiEmail, TfiLocationPin} from 'react-icons/tfi'
import {SlScreenSmartphone} from 'react-icons/sl'
import {DiReact} from 'react-icons/di'

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <header>
      <div className='container mx-auto w-full overflow-visible z-50 pt-4' id='footer'>
        <div className='flex flex-col md:flex-row justify-evenly items-center transform md:translate-y-[-125px] translate-y-[-85px] md:text-xs text-xs tracking-widest leading-normal font-light '>
            
          <div className='flex p-2 items-center'>
            <div className='p-2'>
            < TfiLocationPin/>
            </div>
            <div className=''>
            Orlando, FL
            </div>
          </div>

          <div className='flex p-2 items-center -mt-5 -mb-5 md:mt-0 md:mb-0'>
            <div className='p-2'>
            < TfiEmail/>
            </div>
            <div className=''>
            darioelao@gmail.com
            </div>
          </div>
         
          <div className='flex p-2 items-center'>
            <div className='p-2'>
            < SlScreenSmartphone/>
            </div>
            <div className=''>
            407 789 6161
            </div>
          </div>

        </div>
<div>

        {/* <div className='text-center transform translate-y-[-115px] md:text-sm text-xs flex items-center justify-center tracking-widest leading-normal font-light'>MADE WITH
        <div className='ml-2'>
        <DiReact/> 
        </div>
        </div> */}


      </div>
      </div>
    </header>
  );
};

export default Footer; 