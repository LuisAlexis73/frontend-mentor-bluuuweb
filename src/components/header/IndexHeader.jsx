import { useState, useContext } from 'react';
import {useCartDetails} from '@/context/useCartDetails';

import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';

import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import NavLinkHeader from '@/components/header/NavLinkHeader';
import CartDetailsHeader from '@/components/header/CartDetailsHeader';


const MainHeader = () => {

  const {totalQuantityProducts} = useContext(useCartDetails);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className='container flex items-center mx-auto p-4 md:p-0 gap-8 relative'>
        <button className='md:hidden' onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt='Logo Sneakes'
          className='mr-auto md:mr-0 mb-1 h-5'
        />
        <nav className={`md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 md:static font-bold ${isOpenMenu ? 'absolute top-0 left-0 flex h-full gap-y-5 p-8 flex-col bg-white w-4/5 z-10' : 'hidden'}`}>
          <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text='Collections' />
          <NavLinkHeader text='Men' />
          <NavLinkHeader text='Women' />
          <NavLinkHeader text='About' />
          <NavLinkHeader text='Contact' />
        </nav>
        <div className='flex gap-4'>
          <button onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)} className='relative'>
            <CartIcon />
            <span className='bg-orange-primary px-1 text-xs rounded-full font-bold text-white absolute top-0 rigth-0 translate-x-1'>{totalQuantityProducts}</span>
          </button>
          <img src={AvatarImage} alt='Avatar' className='w-12' />
          {isOpenDetailsCart && <CartDetailsHeader />}
        </div>
      </header>
      <span className='container mx-auto hidden h-[1px] w-full bg-gray-500 md:block'></span>
    </>
  );
};

export default MainHeader;