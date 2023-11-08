
import style from '../styles/about.module.css';
import arrow from '../assets/svg/arrow.svg';
import light from '../assets/svg/light.svg';

const AboutUs = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={`${style.title} ${style.boxshadow}`}>¿Quiénes somos?</h2>
      </div>


      <section className="grid md:grid-cols-2 gap-14 md:gap-8 mt-20 px-16">
        <Card
          title="Misión"
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sapiente sit incidunt, modi laboriosam sed dolor dolore totam deleniti atque labore dolorum vitae reiciendis nulla inventore distinctio, eligendi, perspiciatis fugiat.'
          icon={arrow}
          alt='imagen de flecha'
        />
        <Card
          title="visión"
          text='Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts'
          icon={light}
          alt='imagen bombillo'
        />
        {/* <Card
          title="visión"
          text='Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts'
          icon={light}
          alt='imagen bombillo'
        /> */}
      </section>

      <hr
        className={`${style.divider}`}
      />

    </>
  )
}

export default AboutUs


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({title, text, icon, alt}: any) => {
  return (
    <>

      <div className='bg-white shadow-xl py-6 text-center rounded-xl'>
        <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12 bg-[#fff]">
          <img
            src={icon}
            alt={alt}
            className={`${style['icon-blue']}`}
          />
        </div>
        <h1 className={`${style['title-card']}`}>{title}</h1>
          <p className={`${style['text-card']}`}>
            {text}
          </p>
      </div>

    </>
  )
}
