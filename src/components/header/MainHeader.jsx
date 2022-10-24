import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import { useState } from 'react';

const MainHeader = () => {

  const [navClass, setNavclass] = useState('hidden top-0 left-0 font-bold md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static md:p-0 md:h-auto')

  const handleOpenMenu = () => {
    setNavclass('absolute top-0 left-0 flex h-full gap-y-5 p-8 flex-col md:mr-auto md:flex md:flex-row md:gap-4 font-bold bg-white w-4/5 md:static md:p-0 md:h-auto');
  };

  const handleCloseMenu = () => {
    setNavclass('hidden top-0 left-0 font-bold md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static md:p-0 md:h-auto')
  };

  return (
    <header className='container flex items-center mx-auto px-4 py-8 gap-8 bg-gray-300'>
      <button className='md:hidden' onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img
        src={LogoSneakes}
        alt='Logo Sneakes'
        className='mr-auto md:mr-0 mb-1 h-5'
      />
      <nav className={navClass}>
        <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <a href='#'>Collections</a>
        <a href='#'>Men</a>
        <a href='#'>Women</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className='flex gap-4'>
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt='Avatar' className='w-12' />
      </div>
    </header>
  );
};

export default MainHeader;