import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/portfolio-magos3d.png'
import Img2 from '../assets/portfolio-fullstore.png'
import Img3 from '../assets/portfolio-confluencia.png'
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div className='ssm:mt-24 lg:mt-0'>
            <h2 className='h2 leading-tight text-accent '>
              My Latest  <br />
            Work.
            </h2>
            <p className='mb-12'>
            I have experience in developing projects using various frameworks. Currently, my main focus is on using React for front-end development and Laravel for back-end. My adaptability allows me to work efficiently with a wide variety of tools and technologies, ensuring the flexibility necessary to meet the specific requirements of each project.            </p>
            {/* <button className='btn btn-sm mt-6'>View all projects</button> */}
          </div>
          
          {/* image */}
          <a href='https://magos369.com.ar'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img1} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Magos3D <br />REACT-LARAVEL</span>
              
                </div>
          </div></a>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
             {/* image */}
          <a href='https://fullstore-gaming.com/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img2} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Full Store Gaming <br />WordPress-WooCommerce</span>
              
                </div>
          </div></a>

              {/* image */}
              <a href='https://serviciosconfluencia.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
             {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img3} 
              alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-6
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Servicios Confluencia<br />React-Laravel-TailwindCSS</span>
              
                </div>
          </div></a>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Work;
