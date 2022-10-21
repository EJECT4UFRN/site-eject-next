import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

import { SwiperContainer } from "./styles";

interface Info {
  id: number;
  name: string;
  logo: string;
}

interface HalfType {
  firstHalf: Info[];
  secondHalf: Info[];
}

interface ResponsiveSlidePartnersProps {
  partners: HalfType;
}

export function ResponsiveSlidePartners({
  partners,
}: ResponsiveSlidePartnersProps) {
  const { firstHalf, secondHalf } = partners;

  const params = {
    slidesPerView: 1,
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
          {firstHalf.map((partner) => (
            <div key={partner.id}>
              <img src={`https://res.cloudinary.com/eject/${partner.logo}`} alt={partner.name} />
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide className="contentSwiper">
          {secondHalf.map((partner) => (
            <div key={partner.id}>
              <img src={`https://res.cloudinary.com/eject/${partner.logo}`} alt={partner.name} />
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
