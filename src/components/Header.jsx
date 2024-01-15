import React from 'react';
//images
import Logo from '../assets/flor_vida.jpg';

const Header = () => {
  return <header className='py-8'>
  <div className='container mx-auto'> 
    <div className='flex justify-between items-center'>
      {/* logo asd*/}
        <a href='#'> 
          <img className='max-h-24 rounded-full w-24' src={Logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
    </div>
  </div>
</header> 
  
};

export default Header;
