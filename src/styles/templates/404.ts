import styled from 'styled-components';

export const Template = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.secondary};

  position: relative;
  z-index: 1;

  > header {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 100px;
    grid-template-areas: 'NU IM SO';

    align-items: center;

    > a {
      grid-area: IM;
      margin: 0 auto;
      width: 160px;
      height: 50px;
      img {
        width: 100%;
      }
    }
    > span {
      grid-area: SO;
      margin: 0 auto;

      a {
        margin-left: 0.325rem;
        padding: 0.5rem;

        img {
          transition: 0.3s ease;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
  }
  .svgTop {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;

    animation: motionY 7s linear 2s infinite alternate;
  }
  .svgBottom {
    position: absolute;
    bottom: 0;
    right: 50px;
    opacity: 0.6;

    animation: motionY 7s linear 2s infinite alternate;
  }
  .backErro404 {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    z-index: -1;
  }

  @keyframes motionY {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(10px, 40px, 0);
    }
  }
  @media (max-width: 720px) {
    height: auto;
    > header {
      grid-template-areas: 'IM IM SO';
      > img {
        width: 60%;
      }
    }
    .svgTop,
    .svgBottom {
      display: none;
    }
  }
`;

export const Main = styled.main`
  max-width: 1080px;
  margin: 2rem auto;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  > div {
    width: 50%;

    img {
      width: 100%;
    }
    button {
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.tertiary};
      border-radius: 5px;

      padding: 1rem 2rem;
      margin-top: 2rem;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  div:last-child {
    margin: 6.5rem 0 auto 0;
  }
  h1 {
    font-size: 3.75rem;
    font-weight: 900;

    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    color: rgb(211, 211, 211);
  }
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0 2rem;
    margin-top: 0;

    div {
      width: 100%;

      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
        }
      }
      &:last-child {
        height: 300px;
        margin: 0 0 auto 0;
      }
    }
  }
`;
