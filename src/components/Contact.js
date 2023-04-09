import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
    return (
    <section className='py-16 lg:section h-screen' id='contact'>
      <div  className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Lets work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form action='https://getform.io/f/fdfd1b7e-c126-4a3c-a6d7-efb5fd2c7cf5' method="POST" className='flex-1 border rounded-2xl flex flex-col pag-y-6 pb-12 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all' type="text" name="name" placeholder='Your name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all' type="email" name="email" placeholder='Your email'/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-yellow-500 transition-all resize-none mb-12' type="text" name="message" placeholder='Your message'></textarea>
            <button className='bg-[#D9D9D9] hover:bg-[#A6A6A6] text-[#232323] hover:text-[#FDCA00] font-bold py-1 px-4 rounded'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
    );
  };
export default Contact;