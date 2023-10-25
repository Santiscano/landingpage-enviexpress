import { useState } from 'react';

import style from '../styles/navbar.module.css';

// imagenes
import logo from '../assets/img/logo-envi.png';
import menu from '../assets/svg/menu.svg';
import user from '../assets/svg/user.svg';

const Navbar = () => {

  const [openMenu, setopenMenu] = useState(false);

  return (
    <nav className={style.navbar}>
      <img
        src={logo}
        alt="Enviexpress Logo"
        className='w-[200px]'
      />

      <div className={`${style['nav-list']}`}>
        <NavList/>
      </div>

      <ButtonLogin/>

      <label
        className={`${style['nav-menu']}`}
        onClick={ () => setopenMenu(!openMenu) }
      >
        <img
          src={menu}
          alt='menu'
          className='cursor-pointer w-[40px] h-[40px]'
        />
      </label>

      {openMenu && (
        <div className={`${style['nav-list2']}`}>
          <NavList2/>
        </div>
      )}


    </nav>
  )
}

export default Navbar



const NavList = () => {
  return (
    <>
      <span>Nosotros</span>
      <hr className={`${style.hr}`} />
      <span>Servicios</span>
      <hr className={`${style.hr}`} />
      <span>Contáctanos</span>
      <hr className={`${style.hr}`} />
      <span>Blog</span>
    </>
  )
};

const NavList2 = () => {
  return (
    <>
      <NavList/>
      <hr />
      <ButtonLogin/>
      <span>Ingresa</span>
    </>
  )
}

const ButtonLogin = () => {
  return(
    <button className={`${style['nav-login']}`}>
      <img
        src={user}
        alt='icono usuario'
        className={`${style['color-icon']} w-[35px]`}
      />
      Ingresa
    </button>
  )
};
