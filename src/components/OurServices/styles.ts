import styled from "styled-components";

export const Container = styled.div`
  /* height: 75vh; */
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;

    color: ${({ theme }) => theme.colors.secondary};
  }

  > button {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1em;

    margin-bottom: 4rem;

    color: ${({ theme }) => theme.colors.white};
    background: linear-gradient(91.8deg, #0995db -1.56%, #11a7f1 101.18%);
    box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);

    border-radius: 10px;
    padding: 1rem 1.5rem;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.04);
      opacity: 0.9;
    }
  }

  @media (max-width: 960px) {
    margin-bottom: 6rem;
    button {
      background: ${({ theme }) => theme.colors.secondary};
      box-shadow: none;
      margin-top: 2rem;
    }
  }
  @media (max-width: 720px) {
    margin-bottom: 0;
    height: 65vh;
  }
  @media (max-width: 450px) {
    button {
      margin-top: 0.5rem;
    }
  }
`;

export const Services = styled.div`
  margin: 3rem 0;

  gap: 1.25rem;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 250px;

  div {
    position: absolute;
    transform-style: preserve-3d;
    transition: 1s ease;
    backface-visibility: hidden;
  }

  transform: perspective(500px) rotateY(0deg);

  &:hover {
    div:first-child {
      transform: rotateY(180deg);
    }
    div:last-child {
      transform: rotateY(360deg);
    }
  }

  @media (max-width: 1160px) {
    width: 215px;
    height: 225px;
  }

  .cardFront {
    width: 100%;
    height: 100%;

    text-align: center;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 4px 4px 8px #d4d4ea;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    cursor: pointer;

    img {
      transform: perspective(500px) translateZ(50px);
      width: 70px;
    }

    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.15rem;

      width: 180px;

      transform: perspective(500px) translateZ(50px);
    }
  }
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 8px #d4d4ea;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  img {
    transform: perspective(500px) translateZ(50px);
  }

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.35rem;

    transform: perspective(500px) translateZ(50px);
  }
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;

  transform: perspective(500px) rotateY(180deg);

  top: 0;
  left: 0;

  text-align: center;

  position: absolute;

  background: rgba(255, 204, 1, 1);
  box-shadow: 4px 4px 8px #d4d4ea;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  h2,
  p {
    color: ${({ theme }) => theme.colors.secondary};
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

// ================= STYLE SLIDE =================== //

export const SlideContainer = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
  @media (max-width: 420px) {
    border: 1px solid red;
  }
`;

export const SwiperContainer = styled.div`
  margin-top: 2rem;

  .mySwiper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 650px;
    height: 350px;
  }

  .SwiperSlide {
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
  }

  .swiper-button-prev {
    width: 42px;
    height: 42px;

    cursor: pointer;

    border-radius: 50%;
    background-image: url("/svgs/icon-slide.svg");
    background-repeat: no-repeat;
    background-position: center center;
    transform: translateY(20px);

    &:after {
      display: none;
    }
  }
  .swiper-button-next {
    width: 42px;
    height: 42px;

    cursor: pointer;

    border-radius: 50%;
    background-image: url("/svgs/icon-slide.svg");
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(180deg) translateY(-20px);

    &:after {
      display: none;
    }
  }

  @media (max-width: 720px) {
    .mySwiper {
      width: 550px;
      height: 280px;
    }
    .swiper-button-prev {
      transform: scale(0.85) translate3d(30px, 30px, 0);
    }
    .swiper-button-next {
      transform: scale(0.85) rotate(180deg) translate3d(30px, -30px, 0);
    }
  }
  @media (min-width: 960px) {
    display: none;
  }

  @media (max-width: 560px) {
    .mySwiper {
      width: 450px;
    }
    .swiper-button-prev {
      transform: scale(0.85) translate3d(-10px, 30px, 0);
    }
    .swiper-button-next {
      transform: scale(0.85) rotate(180deg) translate3d(-10px, -30px, 0);
    }
  }

  @media (max-width: 450px) {
    .mySwiper {
      width: 400px;
    }
    .swiper-button-prev {
      transform: scale(0.85) translate3d(-10px, 18px, 0);
    }
    .swiper-button-next {
      transform: scale(0.85) rotate(180deg) translate3d(-10px, -18px, 0);
    }
  }

  @media (max-width: 420px) {
    width: 100%;

    .mySwiper {
      width: 95%;
    }
  }
`;

export const CardSwiper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  > h2 {
    font-size: 1.45rem;
    font-weight: bold;
    font-style: normal;
    text-transform: uppercase;
    text-align: center;

    /* width: a; */

    padding: 0.5rem 1rem;
    margin: 0 auto;

    background: #ff9e16;
    box-shadow: 0px 4px 4px rgba(9, 149, 219, 0.15);
    border-radius: 6px;

    transform: translateY(22px);
  }

  div {
    width: 100%;
    height: 85%;
    margin: 0 auto;

    background: #f8faff;
    box-shadow: 3px 4px 4px rgba(6, 120, 190, 0.15);
    border-radius: 0 0 15px 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;

      width: 360px;

      text-align: center;

      color: ${({ theme }) => theme.colors.gray300};
      padding: 1rem;
    }
  }
  @media (max-width: 720px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 75%;
    transform: translateY(-20px);
  }
`;
