import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
    return (
    <section className='section' id='contact'>
      <div  className='container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <div>
            <div className='text-[20px] mb-4 tracking-widest leading-normal font-light text-[#FDCA00]'>0 3 . 
                <span className=' lg:ml-4 ml-2  tracking-widest leading-normal font-light'>
                <TypeAnimation sequence={[
            'C O N T A C T ',
            2000,
          ]}
          speed={300}
          className='text-[#FDCA00]'
          wrapper='span'
          repeat={Infinity}/>
                </span>
                </div>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Lets work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form action='https://getform.io/f/fdfd1b7e-c126-4a3c-a6d7-efb5fd2c7cf5' method="POST" className='flex-1 border rounded-2xl flex flex-col  p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all' type="text" name="name" placeholder='Your name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all' type="email" name="email" placeholder='Your email'/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all resize-none mb-12' type="text" name="message" placeholder='Your message'></textarea>
            <button className='border border-[#d9d9d9] hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:duration-500 hover:transition hover:ease-in-out text-[#d9d9d9] py-2 px-10 rounded-lg tracking-widest  xl:mb-16'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
    );
  };
export default Contact;