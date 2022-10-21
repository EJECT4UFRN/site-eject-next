import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue100};
  text-align: center;
  padding: 5rem 0 7rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  position: relative;

  > img {
    position: absolute;
    &:first-child {
      top: 0;
      left: 0;
    }
    &:last-child {
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2.8rem;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  max-width: 1080px;

  position: relative;

  /* border: 1px solid red; */

  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .btn {
    width: 38px;
    height: 38px;
    position: absolute;
    top: -20px;
    background: #f3f5f4;
    cursor: pointer;
    display: flex;
    border-radius: 50%;
    background-image: url("/svgs/button-white-slide.svg");
    background-repeat: no-repeat;
    background-position: center center;
    align-items: center;
    justify-content: center;
  }

  .prev {
    right: 0px;
  }
  .next {
    right: 60px;
    transform: rotate(180deg);
  }
  .swiper-button-next {
    width: 42px;
    height: 42px;

    cursor: pointer;

    border-radius: 50%;
    background-image: url("/svgs/button-white-slide.svg");
    background-repeat: no-repeat;
    background-position: center center;

    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    width: 42px;
    height: 42px;

    cursor: pointer;

    border-radius: 50%;
    background-image: url("/svgs/button-white-slide.svg");
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(180deg);

    &:after {
      display: none;
    }
  }

  .mySwiper {
    padding: 1rem 2rem;
  }

  .SwiperSlide {
    display: block;
    /* margin: 0 auto; */
    max-width: 230px;
    padding: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CardSwiper = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 8px #d4d4ea;
  border-radius: 10px;

  padding: 1rem;

  img {
    width: 100%;
    height: 180px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blue300};
  }

  p {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;
