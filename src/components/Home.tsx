import '../styles/home.css';
import Accordion from './tools/Accordion';
import Circle from './tools/Circle';
import person from '../assets/img/silueta-persona.png';
import { useEffect, useState } from 'react';

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setInnerWidth(false);
      } else {
        setInnerWidth(true);
      }
    };

    // verifica al cargar el tamaño de la pantalla
    handleResize();
    // crea el evento de escucha
    window.addEventListener('resize', handleResize);
    // elimina el evento cuando se elimina el componente
    return () => window.removeEventListener('resize', handleResize);
  },[])

  const socialMedia = [
    {name:"bxl-twitter"},
    {name:"bxl-facebook"},
    {name:"bxl-instagram"},
    {name:"bxl-youtube"},
  ];

  return (
    <section className='home' id='home'>
      <Accordion/>
      <div className="container-text">
        <h2>Welcome to our website!</h2>
        <p>This is a simple project created by the team of developers at Teclab in medellin.</p>
      </div>
      <div className="container-img">
        <img src={person} className='person-circle' alt="imagen persona" />
        {innerWidth && (
          <>
            <Circle
              style={{
                width: "4rem",
                height: "4rem",
                position: "absolute",
                top: "1.6rem",
                right: "-5px"
              }}
            />
            <Circle
              style={{
                width: "4rem",
                height: "4rem",
                position: "absolute",
                top: "4rem",
                left: "-30px"
              }}
            />
          </>
        )}
      </div>
      <div className="container__social-media">
        {socialMedia.map(({name}, index) => (
          <i
            key={index}
            className={`bx ${name}`}
          ></i>
        ))}
      </div>
    </section>
  )
}

export default Home
