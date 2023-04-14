import React from 'react';

import Image from '../assets/main.png';
import resume from '../assets/resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import { Link } from "react-scroll";

const Hero = () => {
    return (
    <section className='section ' id='home'>
    <div className='container mx-auto'>
    <div className='flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 transform md:translate-y-[-25px] lg:translate-y-[-50px] translate-y-[-50px] '>
      <div className='flex-1 text-center 
      lg:text-left'>
        <motion.p variants={fadeIn('up', 0.2)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}  className='text-light leading-[2] tracking-wider'>
          Hi, my name is
          </motion.p>
        <motion.h1 variants={fadeIn('up', 0.3)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[1] lg:text-[80px]'>
          Dario <span>Elao</span>
          </motion.h1>
        <motion.div variants={fadeIn('up', 0.4)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[30px] lg:text-[45px] font-semibold uppercase leading-[1]'>
          <span className='mr-2'>
            I am a
            </span>
          <TypeAnimation sequence={[
            'Developer',
            2000,
          ]}
          speed={10}
          className='text-[#FDCA00]'
          wrapper='span'
          repeat={Infinity}/>
         
        </motion.div> 
        <motion.p variants={fadeIn('up', 0.5)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0 '>
        As a full stack developer, I specialize in developing scalable web applications through proficiency in both frontend and backend development.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <Link
      to="contact"
      spy={true}
      smooth={true}
      
      className="border border-[#d9d9d9] hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:duration-500 hover:transition hover:ease-in-out text-[#d9d9d9] py-2 px-10 rounded-lg tracking-widest cursor-pointer"
    >
      Contact
    </Link>

            <button onClick={() => window.open(resume)} className='border border-[#d9d9d9] hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:duration-500 hover:transition hover:ease-in-out text-[#d9d9d9] py-2 px-10 rounded-lg tracking-widest'>Resume</button>
          </motion.div>
          
      </div>
      <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
  <img src={Image} className="w-full lg:max-w-[482px]  transform translate-y-[-50px] " />
</motion.div>
    </div>
    </div>
    </section>
    );
  };

export default Hero;