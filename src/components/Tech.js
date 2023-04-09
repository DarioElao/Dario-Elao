import React from 'react';
import {SiJavascript, SiReact, SiExpress, SiNodedotjs, SiGraphql, SiSequelize, SiMongodb,SiWebpack,SiAngularjs} from 'react-icons/si';
import {ImHtmlFive2,ImCss3} from 'react-icons/im'
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';



const Tech = () => {
    return (
    <div className='section h-screen' id='tech'>
      <div  className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-around lg:items-center text-center lg:text-left'>
            <div>
            <h2 className='text-[32px] mb-6 uppercase -mt-[100px] lg:mt-0'>What I know</h2>
            <h3 className='font-semibold text-[26px] mb-4 leading-[30px]'>Technologies</h3>
            </div>
         
<section className='flex-row mt-[100px] lg:mt-0'>

<div variants={fadeIn('up', 0.7)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='h-14 px-3 p-10 flex justify-between items-center  lg:gap-x-[60px] text-[40px] '>
<h3 className='tracking-wides text-lg '>FRONT END</h3>
<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <SiJavascript/>
            </a> 
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  JavaScript
            </span>     
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
            <ImHtmlFive2/>    
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  HTML
            </span>
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
              <ImCss3 />
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  CSS
            </span>
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://react.dev/'>
              <SiReact />
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  React
            </span>
</div>            

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://angular.io/'>
              <SiAngularjs />
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Angular
            </span>
</div>
            
 </div>



 <div variants={fadeIn('up', 0.7)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='h-14 px-3 p-[100px] my-[50px] flex justify-between items-center text-[40px] border-b-2 border-t-2 my-[30px] border-[#fdca00]'>
  <h3 className='tracking-widest text-lg'>MERN</h3>
 <div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://www.mongodb.com/'>
              <SiMongodb/>
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  MongoDB
            </span>
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://expressjs.com/'>
            <SiExpress/>
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Express.js
            </span>
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://react.dev/'>
              <SiReact />
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  React
            </span>
</div>

<div className='relative group'>
            <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg'  href='https://nodejs.org/en'>
              <SiNodedotjs/>
            </a>
            <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Node.js
            </span>
</div>
 </div>


 <div variants={fadeIn('up', 0.7)}  initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='h-14 px-3 p-10 flex justify-between items-center text-[40px]'>
   <h3 className=' tracking-widest text-lg'>BACK END</h3>
              <div className='relative group'>
                  <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg' href='#'>
                    <SiExpress />
                  </a>
                  <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Express.js
                  </span>
            </div>

            <div className='relative group'>
                  <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg' href='#'>
                    <SiWebpack />
                  </a>
                  <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Webpack
                  </span>
            </div>

            <div className='relative group'>
                  <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg' href='#'>
                    <SiNodedotjs />
                  </a>
                  <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Node.js
                  </span>
            </div>

            <div className='relative group'>
                  <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg' href='#'>
                    <SiGraphql />
                  </a>
                  <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  GraphQL
                  </span>
            </div>

            <div className='relative group'>
                  <a className='text-[#A6A6A6] lg:w-[50px] w-[25px] flex items-center justify-center hover:scale-150 duration-200 rounded-lg' href='#'>
                    <SiSequelize />
                  </a>
                  <span className='opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 mb-3 rounded shadow-lg whitespace-nowrap'>
                  Sequelize
                  </span>
            </div>
 </div>


</section>


</div>
        </div>
      </div>
  
    );
  };

export default Tech;