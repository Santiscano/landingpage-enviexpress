import style from '../styles/contact.module.css';

const Contact = () => {
  return (
    <div className={`${style.container}`}>

      <section className={`${style['section-one']}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sapiente sit incidunt, modi laboriosam sed dolor dolore totam deleniti atque labore dolorum vitae.
        </p>
      </section>

      <section>
        <h3 className={`${style.contact}`}>Contáctanos</h3>
        <form className={`${style['form-container']}`}></form>
      </section>

    </div>
  )
}

export default Contact
