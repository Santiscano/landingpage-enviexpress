import '../styles/miniCards.css';
import data from '../assets/svg/data-analysis-svgrepo-com.svg';
import api from "../assets/svg/api-interface-svgrepo-com.svg";
import availability from "../assets/svg/availability-svgrepo-com.svg";

const MiniCards = () => {
  const arrCards = [
    {icon: data },
    {icon: api },
    {icon: availability },
  ];

  return (
    <div className="container__mini-cards">
      <div className='sub-container-cards'>
        {arrCards.map(({icon}, index) => (
          <div
            key={index}
            className="container-card"
          >
            <img
              src={icon}
              alt="icono"
              className='icon-card'
            />
            <div className="texts">
              <h3>titulo</h3>
              <p>descripcion bien larga</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniCards
