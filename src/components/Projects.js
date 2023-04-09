import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


import Img1 from '../assets/logo1.png'
import Img2 from '../assets/logo2.png'
import Img3 from '../assets/logo3.png'



const Projects = () => {
    return (
    <section className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='projects'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
           <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
              <div>
                <h2 className='leading-tight text-3xl mb-6 '>My Lastest <br />
                Projects
                </h2>
                <p className='max-w-sm mb-16 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button className='bg-[#D9D9D9] hover:bg-[#A6A6A6] text-[#232323] hover:text-[#FDCA00] font-bold py-1 px-4 rounded'>View all projects </button>
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
           </div>

           <div className='flex-1 flex flex-col gap-y-10'>

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
              
           </div>

           

           
        </div>
      </div>
    </section>
    );
  };

export default Projects;