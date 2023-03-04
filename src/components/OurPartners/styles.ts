import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 0 8rem;

  > div {
    max-width: 1280px;
    margin: 2rem auto 4.5rem auto;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1125px) {
    padding: 0 4.5rem;
  }
  @media (max-width: 1020px) {
    padding: 0 3.5rem;
  }
  @media (max-width: 960px) {
    > div {
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 520px) {
    > div {
      margin-bottom: 1.5rem;
    }
  }
`;

export const ContentText = styled.div`
  width: 35%;

  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    width: 25%;
    font-size: 2.5rem;
    font-weight: bold;
  }

  > p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    h1 {
      text-align: center;
      width: 80%;
      margin: 1rem auto 0.5rem auto;
      color: ${({ theme }) => theme.colors.blue200};
    }
    > p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray200};
      width: 70%;
      margin: 0 auto;
    }
  }
  @media (max-width: 480px) {
    > p {
      width: 100%;
    }
  }
`;
export const ContentPartners = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  > div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    &:last-child {
      img {
        &:last-child {
          height: 80px;
        }
      }
    }
    img {
      width: 140px;
      height: 60px;
    }
    &:last-child {
      margin-top: 2rem;
    }
  }
  @media (max-width: 1020px) {
    > div {
      img {
        &:nth-child(2) {
          margin: 0 2.5rem;
        }
      }
    }
  }
  @media (max-width: 960px) {
    > div {
      display: none;
    }
  }
`;

export const SwiperContainer = styled.div`
  width: 120%;
  height: 40vh;
  margin: 1rem 0 3rem 0;
  display: none;

  .mySwiper {
    width: 100%;
    height: 100%;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contentSwiper {
    height: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > div {
      img {
        height: 50px;
        width: 140px;
      }
    }
  }
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 540px) {
    height: 30vh;
    margin-bottom: 0;
    .contentSwiper {
      > div {
        &:nth-child(2) {
          margin: 0 1.5rem;
        }
        img {
          height: 40px;
          width: 80px;
        }
      }
    }
  }
`;
