import { useEffect, useRef, useState } from 'react';

import logo from '../assets/img/logo-envi.png';
import '../styles/navbarInteractive.css';

const NavbarInteractive = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navMenuRef = useRef(null);

  const handleShowMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const hiddenMenu = () => setIsMenuVisible(false);

  // ===============CHANGE BACKGROUND HEADER==============//
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    // funcion para manejar evento scroll
    const handleScroll = () => {
      window.scrollY > 200
        ? setScroll(true)
        : setScroll(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[])
  // ===============CHANGE BACKGROUND HEADER==============//

  return (
    <header
      className="l-header"
      style={{ boxShadow: scroll ? "0 2px 4px rgba(0,0,0,0.1)" : "" }}
      id="header"
    >
      <nav className="nav">
        <img src={logo} alt="Enviexpress Logo" className="nav_logo" />

        <div className={`nav__menu`} id="nav-menu" ref={navMenuRef}
          style={{top: `${isMenuVisible ? '3rem' : '-100%'}`}}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={hiddenMenu}>
                Nosotros
              </a>
            </li>
            <hr />
            <li className="nav__item"><a href="#services" className="nav__link" onClick={hiddenMenu}>Servicios</a></li>
            <hr />
            <li className="nav__item"><a href="#contact" className="nav__link" onClick={hiddenMenu}>Contáctanos</a></li>
            <hr />
            <li className="nav__item"><a href="#blog" className="nav__link" onClick={hiddenMenu}>Blog</a></li>
            <Button style="nav__button"/>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
          <i className='bx bx-menu'></i>
        </div>

        <Button style="nav__button-alt"/>

      </nav>
    </header>
  )
}

export default NavbarInteractive

const Button = (props: any) => {
  return(
    <button
      onClick={() => {
        console.log('se ejecuto')
        window.open('https://solucionesenviexpress.com/');
      }}
      className={`${props.style}`}
    >
      Ingresa
    </button>
  )
}
