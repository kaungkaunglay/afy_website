import React from 'react'
import './AfySlider.css'// Import Swiper styles
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slider_image_1 from "../../assets/logo.svg";
import slider_image_2 from "../../assets/logo.svg";
import slider_image_3 from "../../assets/logo.svg";
import slider_image_4 from "../../assets/logo.svg";

const AfySlider = () => {
  return (
    <main className='AfySlider'>
      <h1 className='heading'>Flower Gallery</h1>
    </main>
  )
}

export default AfySlider