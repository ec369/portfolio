import React from 'react';
//countup
import   CountUp   from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants'; 
import { FaBlender, FaBootstrap, FaCss3, FaDatabase, FaLaravel, FaMicrosoft, FaPhp, FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';


const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-mandala bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

          </motion.div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance full stack developer </h3>
          <p className='mb-6'>
          I consider myself a professional full stack developer highly adaptable to new technologies. In addition to my technical skills, I can solve problems and make efficient decisions. I enjoy teamwork, and my passion for continuous learning drives me to stay updated in the field, allowing me to stay abreast of the latest trends and advances in my area.</p>
             {/* stats */}
             <div className='grid grid-cols-5 lg:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6 mb-12'>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                    </div> 
                        <div className='font-primary text-sm tracking-[2px] '>
                       Years Experience <br />
                       React  <FaReact className='text-[30px]'></FaReact>
                        </div>
                </div>

                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                    </div> 
                        <div className='font-primary text-sm tracking-[2px] '>
                        Years Experience <br />
                       TailwindCSS  <FaReact className='text-[30px]'></FaReact>
                        </div>
                </div>

                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br /> Laravel   <br /> <FaLaravel className='text-[30px]'></FaLaravel>
                  
                        </div>
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br />  Phpmyadmin   <br /> <FaDatabase className='text-[30px]'></FaDatabase>
                 
                        </div>
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={3} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br />    PHP   <br /><FaPhp className='text-[30px]'></FaPhp>
                 
                        </div>  
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br />    Microsoft Visual Studio   <br /> <FaMicrosoft className='text-[30px]'></FaMicrosoft>
                 
                        </div>
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={2} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br /> Blender   <br /> <FaBlender className='text-[30px]'></FaBlender>
                 
                        </div> 
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={1} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Years Experience <br /> MongoDB   <br /> <FaDatabase className='text-[30px]'></FaDatabase>
                 
                        </div>
                </div>
             </div>
              <div className='flex gap-x-8 items-center'>
              <Link to='contact' activeClass='active' smooth={true} spy={true} 
              className=' btn btn-lg cursor-pointer h-[60px] flex items-center justify-center'>
                Contact me
                      </Link>
                      <Link to='contact' activeClass='active' smooth={true} spy={true} 
                          className=' text-gradient btn-link cursor-pointer h-[60px] flex items-center justify-center'>
                      My Portfolio
                    </Link>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
