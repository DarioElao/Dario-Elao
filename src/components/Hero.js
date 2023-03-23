import React from 'react';

import Image from '../assets/Untitled.png';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Hero = () => {
    return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      <div className='flex-1 text-center lg:text-left'>
        <motion.h1 variants={fadeIn('up', 0.3)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>
          Dario <span>Elao</span>
          </motion.h1>
        <motion.div variants={fadeIn('up', 0.4)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[30px] lg:text-[45px] font-semibold uppercase leading-[1]'>
          <span className='mr-2'>I am a</span>
          <TypeAnimation sequence={[
            'Web Developer',
            2000,
          ]}
          speed={5}
          className='text-[#FDCA00]'
          wrapper='span'
          repeat={Infinity}/>
         
        </motion.div> 
        <motion.p variants={fadeIn('up', 0.5)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='bg-[#D9D9D9] hover:bg-[#A6A6A6] text-[#232323] hover:text-[#FDCA00] font-bold py-1 px-4 rounded'>Contact</button>
            <a href='#' className=''>My Portfolio</a>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.7)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <BsLinkedin />
            </a>
            <a href='#'>
              <BsGithub />
            </a>
            <a href='#'>
              <BsInstagram />
            </a>
          </motion.div>
      </div>
      <motion.div variants={fadeIn('up', 0.5)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
        <img src={Image}/>
      </motion.div>
    </div>
    </div>
    </section>
    );
  };

export default Hero;