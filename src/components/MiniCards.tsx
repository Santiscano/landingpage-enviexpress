import '../styles/miniCards.css';

const MiniCards = () => {
  const arrCards = [
    {icon: "../assets/svg/arrow.svg"},
    {icon: "../assets/svg/arrow.svg"},
    {icon: "../assets/svg/arrow.svg"},
  ];

  return (
    <div className="container__mini-cards">
      {arrCards.map(({icon}, index) => (
        <div
          key={index}
          className="container-card"
        >
          <img src={icon} alt="icono" />
          <div className="texts">
            <h3>titulo</h3>
            <p>descripcion bien larga</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MiniCards
