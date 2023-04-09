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
  <div className='section h-screen flex items-center' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen text-left'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 bg-contain bg-about bg-no-repeat h-[500px] bg-top w-[150px] mx-auto mt-10 lg:mt-0'></motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1'>
         <div>
          <h2 className='text-[20px] mb-6 uppercase -mt-40 lg:mt-0'><span className='mr-2 lg:mr-4'>01.</span> about me</h2>
          <div className='text-left mb-4'>
          <p className='mb-4'>I've been an Army Reserve member since 2019, learning skills like marksmanship, physical fitness, and leadership development. <br/></p>

          <p className='mb-4'>While in the Army, I found my passion for technology and graduated from the full stack coding bootcamp at the University of Central Florida this March. I've also been a self-taught developer for the past year, constantly learning new languages and tools.<br/></p>

          <p className='mb-4'>Previously, I've worked in different fields like serving, construction, medical receptionist, and IT help desk. But I've always been drawn to the world of technology.<br/></p>

          <p className='mb-4'>As a developer, I'm excited to continue building projects and contributing to the tech community. Whether it's designing user interfaces or solving complex problems, I love learning and pushing myself to new heights.<br/></p>
          </div>
          
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default About;