import React from 'react';

import {SiJavascript, SiReact, SiExpress, SiNodedotjs, SiGraphql, SiSequelize, SiMongodb,SiWebpack,SiAngularjs, SiCss3} from 'react-icons/si';
import {ImHtmlFive2} from 'react-icons/im'

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

import { TypeAnimation } from 'react-type-animation';




const Tech = () => {
    return (
    <section className='section' id='tech'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row  lg:gap-x-32 gap-y-12'>
          <div className='flex justify-center items-center ' >
            {/*  text*/}
        <motion.div
        variants={fadeIn('right', 0.5)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3 }} 
        
        className='text-[#D9D9D9]'>
  <div className=' text-[20px] mb-4 tracking-widest leading-normal font-light text-[#FDCA00]'> 0 2 . 
  <span className=' lg:ml-4 ml-2  tracking-widest leading-normal font-light'>
  <TypeAnimation sequence={[
            'T E C H ',
            2000,
          ]}
          speed={500}
          className='text-[#FDCA00]'
          wrapper='span'
          repeat={Infinity}/>
  </span>
  
  </div>
  <p className='lg:max-w-sm text-justify font-light'>
    I possess expertise in both front-end and back-end technologies, encompassing CSS3, HTML5, MySQL, MongoDB, Express, jQuery, RESTful API, GraphQL, Sequelize, JavaScript, and React.
  </p>
</motion.div>


          </div>
         
         <div className='flex-1 '>
         <motion.div 
         variants={fadeIn('left', 0.5)} 
         initial='hidden' 
         whileInView={'show'} 
         viewport={{once: false, amount: 0.3 }} 

         className=''>
          
          
            <div className=' group  relative overflow-hidden border-2 border-[#D9D9D9] rounded-xl mb-6 text-[#D9D9D9] '>
              {/* overlay */}
              <div className='group-hover:bg-[#FDCA00] w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              {/* <img className='group-hover:scale-125 transition-all duration-500 h-32 object-cover w-full'  src={Img1} alt=''/> */}
              <h2 className='text-center py-16 text-2xl font-extralight tracking-wider ' dangerouslySetInnerHTML={{ __html: '&lt;   F R O N T E N D   /&gt;' }}></h2>
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-12 transition-all duration-500 z-50 flex justify-center w-full'>
                        
              <div className=' flex justify-evenly w-full text-[#232323]'>


                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform -translate-x-3  shadow-lg font-light'>Javascript</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                                  <SiJavascript className='text-5xl mt-9 '/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md  shadow-lg font-light'>React</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://react.dev/'>
                                  <SiReact className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs   absolute p-1 rounded-md transform -translate-x-1 shadow-lg font-light'>Angular</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://angular.io/'>
                                  <SiAngularjs className='text-5xl mt-9' />
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform translate-x-1 shadow-lg font-light'>HTML</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                                  <ImHtmlFive2 className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md transform translate-x-2  shadow-lg font-light'>CSS</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                                  <SiCss3 className='text-5xl mt-9'/>
                                  </a>
                          </div>


                      </div>


              </div>

            </div>
            

            <div className=' group  relative overflow-hidden border-2 border-[#D9D9D9] rounded-xl mb-6 text-[#D9D9D9]'>
              {/* overlay */}
              <div className='group-hover:bg-[#FDCA00] w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              {/* <img className='group-hover:scale-125 transition-all duration-500 h-32 object-cover w-full'  src={Img1} alt=''/> */}
              <h2 className='text-center py-16 text-2xl font-extralight tracking-wider '> M E R N </h2>
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-12 transition-all duration-500 z-50 flex justify-center w-full'>
                        
              <div className=' flex justify-evenly w-full text-[#232323]'>


                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform -translate-x-3  shadow-lg font-light'>MongoDB</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://www.mongodb.com/'>
                                  <SiMongodb className='text-5xl mt-9 '/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform -translate-x-1 shadow-lg font-light'>Express</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://expressjs.com/'>
                                  <SiExpress className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md  shadow-lg font-light'>React</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://react.dev/'>
                                  <SiReact className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md transform -translate-x-1 shadow-lg font-light'>Node.js</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://nodejs.org/en'>
                                  <SiNodedotjs className='text-5xl mt-9'/>
                                  </a>
                          </div>



                      </div>


              </div>

            </div>

            <div className=' group  relative overflow-hidden border-2 border-[#D9D9D9] rounded-xl mb-6 text-[#D9D9D9]'>
              {/* overlay */}
              <div className='group-hover:bg-[#FDCA00] w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              {/* <img className='group-hover:scale-125 transition-all duration-500 h-32 object-cover w-full'  src={Img1} alt=''/> */}
              <h2 className='text-center py-16 text-2xl font-extralight tracking-wider ' dangerouslySetInnerHTML={{ __html: '{  B A C K E N D  } ' }}></h2>
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-12 transition-all duration-500 z-50 flex justify-center w-full'>
                        
              <div className=' flex justify-evenly w-full text-[#232323]'>

                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform -translate-x-2 shadow-lg font-light'>Webpack</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://webpack.js.org/'>
                                  <SiWebpack className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs absolute p-1 rounded-md transform -translate-x-1  shadow-lg font-light'>Express</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://expressjs.com/'>
                                  <SiExpress className='text-5xl mt-9 '/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md transform -translate-x-1  shadow-lg font-light'>Node.js</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://nodejs.org/en'>
                                  <SiNodedotjs className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs  absolute p-1 rounded-md transform -translate-x-1 shadow-lg font-light'>GraphQL</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://graphql.org/'>
                                  <SiGraphql className='text-5xl mt-9'/>
                                  </a>
                          </div>

                          <div>
                                  <div>
                                  <span className='text-xs   absolute p-1 rounded-md transform -translate-x-1  shadow-lg font-light'>Sequelize</span>
                                  </div>
                                  {/* title */}
                                  <a href='https://sequelize.org/docs/v6/'>
                                  <SiSequelize className='text-5xl mt-9' />
                                  </a>
                          </div>



                      </div>


              </div>

            </div>

         </motion.div>
</div>

        </div>
      </div>
    </section>
  
    );
  };

export default Tech;
