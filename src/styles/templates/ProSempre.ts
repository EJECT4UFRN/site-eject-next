import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  > img {
    position: absolute;
    &:nth-child(1) {
      top: 0;
      right: -80px;
    }
    &:nth-child(2) {
      top: 420px;
      left: -100px;
      transform: rotate(180deg);
    }
    &:nth-child(3) {
      top: 1220px;
      right: -120px;
    }
    &:nth-child(4) {
      top: 1860px;
      left: -100px;
      transform: rotate(180deg);
    }
  }
  @media (max-width: 960px) {
    > img {
      display: none;
    }
  }
  > div {
    max-width: 1280px;
    margin: 0 auto 0 auto;
  }
  padding-bottom: 10rem;
`;
export const Hero = styled.div`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    margin: 8rem 0;
  }

  > div {
    width: 621px;
    height: 152px;

    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 400px;
      font-size: 3.5rem;
      font-weight: bold;
      color: rgba(255, 204, 1, 1);
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    h2 {
      margin: 4rem 0 2rem 0;
    }

    > div span {
      left: 360px;
    }
  }
  @media (max-width: 660px) {
    h2 {
      margin: 2rem 0 2rem 0;
    }
    > div {
      width: 400px;
      height: 112px;

      span {
        top: 4px;
        font-size: 3rem;
        left: 240px;
      }
    }
  }
  @media (max-width: 460px) {
    > div {
      width: 340px;

      span {
        top: 11px;
        font-size: 2.75rem;
        left: 200px;
      }
    }
  }
  @media (max-width: 370px) {
    > div {
      width: 320px;
      padding: 0 1rem;

      span {
        top: 18px;
        font-size: 1.8rem;
        left: 174px;
      }
    }
  }
`;
export const AboutUs = styled.div`
  margin: 4rem 0 10rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    justify-content: flex-end;
    img {
      width: 100%;
    }
  }
  p {
    width: 40%;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 25px;
    margin-left: 1rem;
  }

  @media (max-width: 760px) {
    > div {
      img {
        width: 70%;
      }
    }
    p {
      width: 60%;
      margin-right: 4rem;
    }
  }
  @media (max-width: 590px) {
    > div {
      justify-content: center;
    }
    p {
      transform: translate3d(-30px, 0, 0);
      width: 80%;
    }
  }
  @media (max-width: 510px) {
    p {
      transform: translate3d(-30px, 0, 0);
      width: 90%;
      font-size: 1.2rem;
      margin-right: 0rem;
      line-height: 21px;
    }
  }
`;

export const Buttons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  a {
    font-size: 1rem;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0.75rem 2.5rem;
    border-radius: 0.5rem;
    border: 3px solid #da8001;

    color: ${({ theme }) => theme.colors.white};
    &:first-child {
      background: #da8001;
    }
    &:last-child {
      border: 3px solid ${({ theme }) => theme.colors.white};
    }
  }
  @media (max-width: 410px) {
    flex-direction: column;
    a:last-child {
      padding: 0.75rem 3.1rem;
    }
  }
`;
