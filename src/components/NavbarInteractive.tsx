import { useRef, useState } from 'react';

import logo from '../assets/img/logo-envi.png';
import '../styles/navbarInteractive.css';

const NavbarInteractive = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navMenuRef = useRef(null);

  const handleShowMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const hiddenMenu = () => setIsMenuVisible(false);

  return (
    <nav className="nav bd-container">
      <img src={logo} alt="Enviexpress Logo" className="nav_logo" />

      <div className={`nav__menu`} id="nav-menu" ref={navMenuRef}
        style={{top: `${isMenuVisible ? '3rem' : '-100%'}`}}
      >
        <ul className="nav__list">
          <li className="nav__item"><a href="#about" className="nav__link active-link" onClick={hiddenMenu}>Nosotros</a></li>
          <li className="nav__item"><a href="#services" className="nav__link" onClick={hiddenMenu}>Servicios</a></li>
          <li className="nav__item"><a href="#contact" className="nav__link" onClick={hiddenMenu}>Contáctanos</a></li>
          <li className="nav__item"><a href="#blog" className="nav__link" onClick={hiddenMenu}>Blog</a></li>
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
        <i className='bx bx-menu'></i>
      </div>

    </nav>
  )
}

export default NavbarInteractive
