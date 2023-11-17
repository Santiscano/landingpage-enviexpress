import '../styles/about.css';
import style from '../styles/about.module.css'; //! eliminar al terminar
import arrow from '../assets/svg/arrow.svg';
import light from '../assets/svg/light.svg';
import car from '../assets/img/bg-car.png';

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className='about__container-img'>
          <img src={car} alt="bg car" className='about__img-card'/>
        </div>
        <div className='about__container-text'>
          <h2 className='about__about-us-title'>¿Quiénes somos?</h2>
          <p className='about__about-us-text'>
            En el corazón de nuestra esencia, nos encontramos como pioneros en soluciones logísticas a medida, donde la excelencia se encuentra con la innovación. Somos más que una empresa; somos arquitectos del movimiento, impulsados por tecnología vanguardista y servicios de conectividad poderosos.
          </p>
          <button className='about__about-us-button'>
            Leer más
          </button>
        </div>
      </div>


      <section className="about__container-mision-vision">
        <Card
          title="Misión"
          text='Brindamos soluciones integrales de servicio a nuestros aliados, siendo su último eslabón en la cadena de valor.  Generamos experiencias positivas a cada uno de los actores: colaboradores, proveedores, consumidores, aliados y accionistas. Velamos para que nuestros actos vayan encaminados a construir un mundo mejor.'
          icon={arrow}
          alt='imagen Misión'
        />
        <Card
          title="visión"
          text='Ser una compañía reconocida como la mejor en soluciones logísticas a la medida, apoyados en tecnología y servicios de conectividad potentes, sin límites para innovar, basados en el principio de “CRECER HACIENDO CRECER”.'
          icon={light}
          alt='Imagen Visión'
        />
        {/* <Card
          title="visión"
          text='Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts'
          icon={light}
          alt='imagen bombillo'
        /> */}
      </section>

      {/* <hr
        className={`${style.divider}`}
      /> */}

    </>
  )
}

export default AboutUs


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({title, text, icon, alt}: any) => {
  return (
    <div className='mision-vision__container-card'>
      <div className="mision-vision__card__container-img">
        <img
          src={icon}
          alt={alt}
          className='mision-vision__card__img'
        />
      </div>
      <h2 className='mision-vision__card__title'> {title} </h2>
      <p className={`${style['text-card']}`}> {text} </p>
    </div>
  )
}
