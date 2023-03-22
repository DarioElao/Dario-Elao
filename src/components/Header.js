import React from 'react';
import Logo from '../assets/logo5.png'

const Header = () => {
    return (
    <header className='fixed top  w-full overflow-hidden z-50'>
      <div className='container mx-auto m-2'>
        <div>
          <a href='home'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
      </div>
    </header>
    );
  };

export default Header;