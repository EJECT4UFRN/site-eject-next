import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors.blue200};

  position: relative;
  > img {
    position: absolute;
    top: 0;
    transform: translate3d(0, -100px, 0);
    left: -200px;
  }
  @media (min-width: 1500px) {
    height: 70vh;
  }
`;

export const Scroll = styled.p`
  overflow: auto;
`;

export const Content = styled.div`
  width: 85%;
  max-width: 1180px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    &:first-child {
      width: 40%;

      > h1 {
        font-weight: bold;
        font-size: 2.5rem;
        width: 90%;
      }
      button {
        font-weight: bold;
        font-size: 0.8rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.white};
        background: transparent;
        box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);

        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.colors.white};
        padding: 0.6rem 1.8rem;
        margin-top: 2rem;
        position: relative;
        z-index: 1;

        &:before {
          transition: 0.5s all ease;
          position: absolute;
          top: -2px;
          left: 50%;
          right: 50%;
          bottom: -2px;
          opacity: 0;
          content: '';
          background: #fff;
          border-radius: 6px;
        }
        &:hover {
          font-weight: 700;
          color: ${({ theme }) => theme.colors.blue200};
          &:before {
            transition: 0.5s all ease;
            left: -2px;
            right: -2px;
            opacity: 1;
            z-index: -1;
          }
        }
      }
    }
    &:last-child {
      width: 60%;
      position: relative;
      height: 80vh;
    }
  }
  @media (max-width: 1380px) {
    width: 90%;
    > div {
      &:first-child {
        width: 30%;
      }
      &:last-child {
        width: 80%;
      }
    }
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const CardFeedback = styled.a`
  width: 450px;
  height: 150px;

  color: ${({ theme }) => theme.colors.gray200};
  background: #ffffff;
  box-shadow: 4px 4px 8px #9a9ad9;
  border-radius: 10px;

  padding: 1.5rem 1rem;

  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 30px;
  transition: 0.5s ease;

  span {
    display: flex;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      p {
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        white-space: nowrap;
        color: ${({ theme }) => theme.colors.secondary};
      }
      span {
        text-transform: uppercase;
      }
    }
  }
  > p {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 1rem;
    width: 70%;
  }

  &:nth-child(1) {
    top: 50px;
    left: -12px;
  }
  &:nth-child(2) {
    top: 185px;
    left: 260px;
    z-index: 22;
  }
  &:nth-child(3) {
    top: 330px;
    left: 60px;
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;
  display: none;

  text-align: center;
  h1 {
    font-size: 3rem;
    width: 70%;
    padding-top: 0.5rem;
    margin: 1rem auto;
  }
  @media (max-width: 960px) {
    display: block;
  }
  @media (max-width: 510px) {
    h1 {
      width: 90%;
      font-size: 2.5rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 60vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  > button {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    position: absolute;

    left: 20px;

    transition: 0.7s ease-in-out;
    z-index: 5;
    filter: drop-shadow(13px 12px 10px rgba(19, 81, 112, 0.5));

    &:nth-child(1) {
      top: 0;
      &.selected {
        transform: scale(1.2) translate3d(140px, 10px, 0);
      }
    }
    &:nth-child(2) {
      top: 100px;
      &.selected {
        transform: scale(1.2) translate3d(140px, -80px, 0);
        z-index: 5;
      }
    }
    &:nth-child(3) {
      top: 200px;
      &.selected {
        transform: scale(1.2) translate3d(140px, -160px, 0);
        z-index: 5;
      }
    }
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  @media (max-width: 890px) {
    > button {
      &:nth-child(1) {
        &.selected {
          transform: scale(1.2) translate3d(90px, 10px, 0);
        }
      }
      &:nth-child(2) {
        &.selected {
          transform: scale(1.2) translate3d(90px, -80px, 0);
        }
      }
      &:nth-child(3) {
        &.selected {
          transform: scale(1.2) translate3d(90px, -160px, 0);
        }
      }
    }
  }
  @media (max-width: 730px) {
    width: 95%;
    > button {
      &:nth-child(1) {
        &.selected {
          transform: scale(1.1) translate3d(120px, 10px, 0);
        }
      }
      &:nth-child(2) {
        &.selected {
          transform: scale(1.1) translate3d(120px, -80px, 0);
        }
      }
      &:nth-child(3) {
        &.selected {
          transform: scale(1.1) translate3d(120px, -160px, 0);
        }
      }
    }
  }
  @media (max-width: 680px) {
    > button {
      &:nth-child(1) {
        &.selected {
          transform: scale(1.1) translate3d(90px, 10px, 0);
        }
      }
      &:nth-child(2) {
        &.selected {
          transform: scale(1.1) translate3d(90px, -80px, 0);
        }
      }
      &:nth-child(3) {
        &.selected {
          transform: scale(1.1) translate3d(90px, -160px, 0);
        }
      }
    }
  }
  @media (max-width: 510px) {
    > button {
      width: 4.2rem;
      height: 4.2rem;
      left: 4px;
      &:nth-child(1) {
        &.selected {
          transform: scale(1.1) translate3d(80px, 30px, 0);
        }
      }
      &:nth-child(2) {
        &.selected {
          transform: scale(1.1) translate3d(80px, -60px, 0);
        }
      }
      &:nth-child(3) {
        &.selected {
          transform: scale(1.1) translate3d(80px, -150px, 0);
        }
      }
    }
  }
  @media (max-width: 420px) {
    > button {
      &:nth-child(1) {
        &.selected {
          transform: scale(1.1) translate3d(50px, 30px, 0);
        }
      }
      &:nth-child(2) {
        &.selected {
          transform: scale(1.1) translate3d(50px, -60px, 0);
        }
      }
      &:nth-child(3) {
        &.selected {
          transform: scale(1.1) translate3d(50px, -150px, 0);
        }
      }
    }
  }
`;

export const FeedBox = styled.main`
  width: 380px;
  height: 300px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 8px rgba(212, 212, 234, 0.3);
  border-radius: 10px;

  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;

    color: ${({ theme }) => theme.colors.gray300};
    line-height: 2rem;
    overflow: auto;
  }

  h3 {
    font-size: 2rem;

    color: ${({ theme }) => theme.colors.secondary};

    margin-top: 2rem;
  }
  @media (max-width: 770px) {
    width: 330px;
    height: 300px;
  }
  @media (max-width: 730px) {
    transform: translate(20px);
  }
  @media (max-width: 620px) {
    width: 260px;
    transform: translate(40px);
  }
  @media (max-width: 510px) {
    p {
      font-size: 1.35rem;
      line-height: 1.5rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    width: 230px;
    height: 250px;
    transform: translate(30px);
  }
`;
