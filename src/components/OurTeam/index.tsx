import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { Container, CardSwiper, SwiperContainer } from "./styles";

type TeamProps = {
  team: {
    nome: string;
    id: number;
    foto: string;
    cargo: string;
  }[];
};

export function OurTeam({ team }: TeamProps) {
  const params = {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    spaceBetween: 40,
    loop: true,
    grabCursor: true,
  };

  return (
    <Container>
      <img src="/svgs/triangles-white.svg" alt="Triangulos" />
      <div>
        <h1>Nosso time</h1>
      </div>

      <div id="contenher">
        {team.map((card) => (
          <div className="card-membros container">
            <Image
              src={card.foto}
              alt={`Foto do(a) ${card.nome}`}
              width={250}
              height={250}
              quality={100}
              className="image"
            />
            <div className="overlay">
              <div className="text">
                <h3>{card.nome}</h3>
                <p>{card.cargo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SwiperContainer className="SwiperContainer">
        <Swiper {...params} slidesPerView="auto" className="mySwiper">
          {team.map((card) => (
            <SwiperSlide className="SwiperSlide">
              <CardSwiper className="card-membros container">
                <Image
                  src={card.foto}
                  alt={`Foto do(a) ${card.nome}`}
                  width={320}
                  height={320}
                  quality={100}
                />
                <div className="overlay">
                  <div className="text">
                    <h3>{card.nome}</h3>
                    <p>{card.cargo}</p>
                  </div>
                </div>
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

