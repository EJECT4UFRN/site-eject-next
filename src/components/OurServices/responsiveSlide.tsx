import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { SwiperContainer, CardSwiper } from './styles';

export default function ResponsiveSlide({ services }) {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  };
  return (
    <SwiperContainer>
      <Swiper {...params} className="mySwiper">
        {services.map((service, index) => (
          <SwiperSlide key={index} className="SwiperSlide">
            <CardSwiper>
              <h2>{service.format_title_front}</h2>
              <div>
                <p>{service.conteudoBack}</p>
              </div>
            </CardSwiper>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </SwiperContainer>
  );
}
