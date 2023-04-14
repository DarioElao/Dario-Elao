import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


import Img1 from '../assets/logo1.png'
import Img2 from '../assets/logo2.png'
import Img3 from '../assets/logo3.png'

import { TypeAnimation } from 'react-type-animation';



const Projects = () => {
    return (
    <section className='section' id='projects'>
<div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 text-left'>
           <div className='flex-1 flex flex-col gap-y-14 mb-4 md:mb-10 transform translate-y-[15px] lg:translate-y-7 md:-translate-y-6'>
              <motion.div 
              variants={fadeIn('right', 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.3 }} 
              className='transform xl:-translate-y-[-25px]'>
                <div className='text-[20px] mb-4 tracking-widest leading-normal font-light text-[#FDCA00]'>0 3 . 
                <span className=' lg:ml-4 ml-2  tracking-widest leading-normal font-light'>
                <TypeAnimation sequence={[
            'P R O J E C T S ',
            2000,
          ]}
          speed={300}
          className='text-[#FDCA00]'
          wrapper='span'
          repeat={Infinity}/>
                </span>
                </div>
                <p className='lg:max-w-sm text-justify font-light mb-5 md:mb-10  leading-[29px]'>These are a few of the projects I've developed during my enrollment in the Full Stack Bootcamp at UCF.</p>
                <a href='https://github.com/DarioElao?tab=repositories'>
                <button className='border border-[#d9d9d9] hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:duration-500 hover:transition hover:ease-in-out text-[#d9d9d9] py-2 px-10 rounded-lg tracking-widest  xl:mb-16'>View all projects </button>
                </a>
              </motion.div>
              
              {/* image */}
              <motion.div 
              variants={fadeIn('right', 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.3 }} 
              className='group relative overflow-hidden border-2 border-white rounded-xl mb-10 '>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> 
                <span className=''>UI/UX</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                 <span className='text-3xl text-white'>Project Title</span> 
                  </div>
              </motion.div>
           </div>

           <motion.div 
           variants={fadeIn('left', 0.5)} 
           initial='hidden' 
           whileInView={'show'} 
           viewport={{once: false, amount: 0.3 }} 
           className='flex-1 flex flex-col gap-y-10'>

             {/* image */}
             <div className='group relative overflow-hidden border-2 border-white rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> 
                <span className=''>UI/UX</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                 <span className='text-3xl text-white'>Project Title</span> 
                  </div>
              </div>


            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> 
                <span className=''>UI/UX</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                 <span className='text-3xl text-white'>Project Title</span> 
                  </div>
              </div>
              
           </motion.div>

           

           
        </div>
      </div>
    </section>
    );
  };

export default Projects;





