import style from '../styles/footer.module.css';


const Footer = () => {
  return (
    <div className={`${style['container-footer']}`}>

      <ul className={`${style['list-politice']}`}>
        <li>POLÍTICA Y TÉRMINOS</li>
        <li>POLÍTICA DE TRATAMIENTO DE DATOS</li>
        <li>QUEJAS Y RECLAMOS</li>
      </ul>

      <hr className={`${style.divider}`}/>

      <p className={`${style.copyright}`}>
        @ copyright 2023 Todos los derechos reservados.
      </p>

    </div>
  )
}

export default Footer
