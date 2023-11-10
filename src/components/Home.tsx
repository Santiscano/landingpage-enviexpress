import '../styles/home.css';
import Accordion from './tools/Accordion';
import Circle from './tools/Circle';

const Home = () => {
  return (
    <section className='home' id='home'>
      <Accordion/>
      <div className="element1">Elemento 1</div>
      <div className="element2">
        Elemento 2
        <Circle/>
      </div>
    </section>
  )
}

export default Home
