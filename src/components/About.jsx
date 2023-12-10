import React from 'react';
//countup

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
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>img</div>
          {/* text */}
          <div>
            <h2>About me.</h2>
            <h3>I'm a Freelance </h3>
          
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
