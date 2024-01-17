import React from 'react';
//images
import Logo from '../assets/flor_vida.jpg';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
  <div className='container mx-auto'> 
    <div className='flex justify-between items-center'>
      {/* logo asd*/}
        <a href='#'> 
          <img className='max-h-24 rounded-full w-24' src={Logo} alt='' />
        </a>
        {/* button */}
        {/* <Link to='contact' activeClass='active' smooth={true} spy={true} 
              className=' btn btn-sm cursor-pointer h-[60px] flex items-center justify-center'>
       Work with me
        </Link> */}
    </div>
  </div>
</header> 
  
};

export default Header;
