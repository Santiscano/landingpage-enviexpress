import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Image1 from '../assets/img/04.jpg';
import Image2 from '../assets/img/05.jpg';
import Image3 from '../assets/img/06.jpg';
import Image4 from '../assets/img/teclab.png';

const slides = [ Image1, Image2, Image3, Image4, Image1, Image2, Image3, Image4 ]


const Hero = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation,  Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={ ( swiper ) => console.log( 'swiper: ', swiper ) }
        loop
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
      >
        {slides.map(( item, i ) => (
          <SwiperSlide key={i}>
            <img src={item} alt={`image ${i}`} className='w-screen'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
