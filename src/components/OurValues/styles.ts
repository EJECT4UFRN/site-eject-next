import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ValuesCard = styled.div`
  max-width: 1280px;
  margin: 2.5rem auto 5rem auto;
  gap: 1rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

type ValueProps = {
  imgBack: {
    image: string;
    imageHover: string;
  };
};

export const Value = styled.div<ValueProps>`
  background-image: ${({ imgBack }) =>
    `url(${imgBack.image})`};
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  font-size: 1.25rem;
  color: transparent;

  flex-wrap: wrap;

  padding: 6rem 1rem;
  width: 28%;

  transition: 0.3s ease;

  &:hover {
    background-image: ${({ imgBack }) =>
      `url(${imgBack.imageHover})`};

    color: #fff;
  }
`;

export const SwiperContainer = styled.div`
  transform: translateY(-50px);
  display: none;
  position: relative;
  .contentSwiper {
    height: 360px;
  }
  .mySwiper {
    .swiper-button-prev {
      width: 42px;
      height: 42px;

      position: absolute;
      top: 40%;
      left: 150px;

      cursor: pointer;

      border-radius: 50%;
      background-image: url("/svgs/icon-slide.svg");
      background-repeat: no-repeat;
      background-position: center center;

      z-index: 88;

      &:after {
        display: none;
      }
    }
    .swiper-button-next {
      width: 42px;
      height: 42px;

      position: absolute;
      top: 40%;
      right: 150px;

      cursor: pointer;

      border-radius: 50%;
      background-image: url("/svgs/icon-slide.svg");
      background-repeat: no-repeat;
      background-position: center center;
      transform: rotate(180deg);

      z-index: 88;

      &:after {
        display: none;
      }
    }
  }

  margin: 4rem 0;
  @media (max-width: 960px) {
    display: flex;
  }

  @media (max-width: 840px) {
    .mySwiper .swiper-button-prev {
      left: 100px;
    }
    .mySwiper .swiper-button-next {
      right: 100px;
    }
  }
  @media (max-width: 720px) {
    .mySwiper .swiper-button-prev {
      left: 60px;
    }
    .mySwiper .swiper-button-next {
      right: 60px;
    }
  }
  @media (max-width: 640px) {
    .contentSwiper {
      height: 310px;
    }
  }
  @media (max-width: 570px) {
    .mySwiper .swiper-button-prev {
      left: 30px;
    }
    .mySwiper .swiper-button-next {
      right: 30px;
    }
  }
  @media (max-width: 520px) {
    transform: scale(0.9) translateY(-50px);
    .mySwiper .swiper-button-prev {
      left: 0px;
    }
    .mySwiper .swiper-button-next {
      right: 0px;
    }
  }
  @media (max-width: 460px) {
    .contentSwiper {
      height: 290px;
    }
  }
  @media (max-width: 440px) {
    transform: scale(0.9) translateY(-80px);
  }
`;
