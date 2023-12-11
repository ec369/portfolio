import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

//services daa
const services = [
  {
    name: 'UI/UX Design',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium beatae omnis sunt expedita officiis fuga facere error necessitatibus ipsam, labore eaque aperiam eum libero esse impedit distinctio! Atque, nobis.',
    link: 'Learn More',
  },{
    name: 'UI/UX Design',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium beatae omnis sunt expedita officiis fuga facere error necessitatibus ipsam, labore eaque aperiam eum libero esse impedit distinctio! Atque, nobis.',
    link: 'Learn More',
  },{
    name: 'UI/UX Design',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium beatae omnis sunt expedita officiis fuga facere error necessitatibus ipsam, labore eaque aperiam eum libero esse impedit distinctio! Atque, nobis.',
    link: 'Learn More',
  },
]
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image*/}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'> What I Do </h2>
            <h3 className='h3 max-w-[455px] mb-16'>Soy freelance guachin</h3>
            <button className='btn btn-sm'>See my work</button>
          </div>
          {/* servives */}
          <div className='flex-1'>
            {/* servives list */}
            <div>
              {services.map((service, index)=> {
               //destructure service
               const {name, description, link} = service; 
               return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                  key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                      font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}</p>
                    </div>
                    <div>links</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      </section>
  )
};

export default Services;
