import React from 'react';
//countup
import   CountUp   from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants'; 


const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          {/* img */}
          <div className='flex-1 bg-mandala bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          {/* text */}
          <div>
            <h2>About me.</h2>
            <h3>I'm a Freelance </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, consectetur. Aperiam maiores aliquid quis vel veritatis ipsa, cumque, impedit magnam amet ea iste architecto accusamus.
             Totam eligendi veritatis ad magni.</p>
             {/* stats */}
             <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={13} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Year of <br />
                        Exprience
                        </div>
                </div>
                <div>
                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                     { inView ? <CountUp start={0} end={13} duration={3}/> : null} 
                    </div>
                        <div className='font-primary text-sm tracking-[2px]'>
                        Year of <br />
                        Exprience
                        </div>
                </div>
             </div>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact me</button>
                <a href="#" className='text-gradient btn-link'>
                  My Portfolio
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
