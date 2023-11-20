import '../styles/services.css';

import servicesListH from '../assets/img/services_h.png';
import servicesListV from '../assets/img/services_v.png';

const Services = () => {
  return (
    <div className='services__container'>

      <div className='services__container-texts'>
        <div className="services__texts1">
          <h3 className="services__title">title 1</h3>
          <p className="services__message">mensaje</p>
        </div>
        <div className="services__texts2">
          <h3 className="services__title">title 2</h3>
          <p className="services__message">message</p>
        </div>
        <div className="services__texts3">
          <h3 className="services__title">title 3</h3>
          <p className="services__message">message</p>
        </div>
        <div className="services__texts4">
          <h3 className="services__title">title 4</h3>
          <p className="services__message">message</p>
        </div>
        <div className="services__texts5">
          <h3 className="services__title">title 5</h3>
          <p className="services__message">message</p>
        </div>
        <div className="services__texts6">
          <h3 className="services__title">title 6</h3>
          <p className="services__message">message</p>
        </div>
      </div>

      <div className="services__container_img">
        <img
          src={servicesListH}
          className='services__img-h'
          alt="imagen lista servicios horizontal"
        />
        <img
          src={servicesListV}
          className='services__img-v'
          alt="imagen lista servicios vertical"
        />

      </div>
    </div>
  )
}

export default Services
