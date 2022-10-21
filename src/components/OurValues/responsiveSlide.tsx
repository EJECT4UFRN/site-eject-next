import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { CardOurValue1, CardOurValue2, CardOurValue3 } from '../CardOurValues';

import { SwiperContainer } from './styles';

export function ResponsiveSlideOurValues() {
  const params = {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: true,
  };

  return (
    <SwiperContainer>
      <Swiper {...params} className="mySwiper">
        <SwiperSlide className="contentSwiper">
          <CardOurValue1 />
        </SwiperSlide>
        <SwiperSlide className="contentSwiper">
          <CardOurValue2 />
        </SwiperSlide>
        <SwiperSlide className="contentSwiper">
          <CardOurValue3 />
        </SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </SwiperContainer>
  );
}
