import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { Container, CardSwiper, SwiperContainer } from "./styles";

type TeamProps = {
  team: {
    nome: string;
    id: number;
    foto: number;
    cargo: string;
  }[];
};

export function OurTeam({ team }: TeamProps) {
  const params = {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
  };

  return (
    <Container>
      <img src="/svgs/triangles-white.svg" alt="Triangulos" />
      <h1>Nosso time</h1>
      <SwiperContainer>
        <Swiper {...params} slidesPerView="auto" className="mySwiper">
          {team.map((card) => (
            <SwiperSlide className="SwiperSlide" key={card.id}>
              <CardSwiper>
                <Image
                  src={`https://res.cloudinary.com/eject/${card.foto}`}
                  alt={`Foto do(a) ${card.nome}`}
                  width={320}
                  height={320}
                  quality={100}
                />
                <h3>{card.nome}</h3>
                <p>{card.cargo}</p>
              </CardSwiper>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btn next"></div>
        <div className="btn prev"></div>
      </SwiperContainer>
      <img src="/svgs/triangles-white.svg" alt="" />
    </Container>
  );
}
