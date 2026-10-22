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

import { Value } from './styles';

import { SwiperContainer } from './styles';

type Values = {
  id: number;
  hover: string;
  imagem: string;
  text: string;
};

type ResponsiveSlideProps = {
  ourValues: Values[];
};

export function ResponsiveSlideOurValues({ ourValues }: ResponsiveSlideProps) {
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
      
        {ourValues?.map((value) => (
          <SwiperSlide key={value.id} className="contentSwiper">
            <Value imgBack={{ image: value.imagem, imageHover: value.hover }}>
              <h2>{value.text}</h2>
            </Value>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </SwiperContainer>
  );
}
