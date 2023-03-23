import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
    return (
    <header >
      {/* maintains logo at the top of the page at all times */}
      {/* <div className='fixed top  w-full overflow-hidden z-50'></div> */}
      <div className='container mx-auto my-3 w-full overflow-hidden z-50'>
        <div className='w-[60px] lg:w-[75px]'>
          <a href='#'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
      </div>
    </header>
    );
  };

export default Header;