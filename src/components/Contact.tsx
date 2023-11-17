import '../styles/contact.css';
import phone from '../assets/svg/api-interface-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import Circle from './tools/Circle';

const Contact = () => {
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

  return (
    <div className='contact__container-contact'>

      <section className='contact__container-section-one'>
        <div className='flex flex-row gap-6 items-center'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className='contact__container-section-card'>
        <div className='contact__card-contac-numbers'>
          <img src={phone} alt="icon phones" width={170} />
          <div className='contact__list_phones'>
            <h3>Contactanos</h3>
            <p>6047381</p>
            <p>3117114835</p>
          </div>
        </div>
        {!innerWidth && (
          <Circle
            style={{
              width: "6rem",
              height: "6rem",
              position: "absolute",
              top: "-3rem",
              right: "-3rem"
            }}
          />
        )}
      </section>

    </div>
  )
}

export default Contact
