import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <div className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 bg-contain bg-about bg-no-repeat h-[500px] bg-top w-[200px] mx-auto mt-10 lg:mt-0'></motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1'>
         <div className=' lg:mt-0'>
          <h2 className='text-[32px] mb-6 tracking-[10%] uppercase'>about me</h2>
          <h3 className='font-semibold text-[26px] mb-4 leading-[30px]'>Im a web developer that just graduated bootcamp</h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default About;