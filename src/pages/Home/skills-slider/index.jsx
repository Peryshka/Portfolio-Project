import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from 'clsx';
import styles from './styles.module.scss';
import JSLogo from '../../../assets/images/js.png';
import TSLogo from '../../../assets/images/ts.png';
import HTMLLogo from '../../../assets/images/html.svg';
import CssLogo from '../../../assets/images/css2.png';
import SASSLogo from '../../../assets/images/sass.png';
import ReactLogo from '../../../assets/images/react.svg';
import SvelteLogo from '../../../assets/images/svelte.png';
import {ReactComponent as ArrowIcon} from '../../../assets/icons/arrow.svg';
import {Autoplay} from "swiper/modules";

const SkillsSlider = (props) => {
  const [swiperInstance, setSwiperInstance]=useState(null);
  const {

  } = props;

  return(
    <div className={styles['slider-wrap']}>
      <button
        className={clsx(styles['slider-nav-button'], styles['left'])}
        onClick={() => swiperInstance.slidePrev()}>
        <ArrowIcon />
      </button>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        width={150}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
           <img src={JSLogo} alt='JS Logo'/>
          </div>
          <h6 className={styles['title']}>JavaScript</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={TSLogo} alt='Ts Logo'/>
          </div>
          <h6 className={styles['title']}>Typescript</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={CssLogo} alt='Css Logo'/>
          </div>
          <h6 className={styles['title']}>Css</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={HTMLLogo} alt='Html Logo'/>
          </div>
          <h6 className={styles['title']}>HTML</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={SASSLogo} alt='Sass Logo'/>
          </div>
          <h6 className={styles['title']}>Sass</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={ReactLogo} alt='React Logo'/>
          </div>
          <h6 className={styles['title']}>React Js</h6>
        </SwiperSlide>
        <SwiperSlide className={styles['slider__item']}>
          <div className={styles['img-wrap']}>
            <img src={SvelteLogo} alt='Svelte Logo'/>
          </div>
          <h6 className={styles['title']}>Svelte</h6>
        </SwiperSlide>
      </Swiper>
      <button
        className={clsx(styles['slider-nav-button'], styles['right'])}
        onClick={() => swiperInstance.slideNext()}>
        <ArrowIcon />
      </button>
    </div>
  )
}

export default SkillsSlider;