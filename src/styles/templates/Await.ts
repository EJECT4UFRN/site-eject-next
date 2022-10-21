import styled from 'styled-components';

export const Template = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;

  background: radial-gradient(
    126.74% 315.18% at -7.92% 105.01%,
    #005bae 0%,
    #11a7f1 51.98%,
    #dff6fe 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  header {
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 100;

    figure {
      img {
        width: 100%;
      }
    }
  }
  footer {
    font-size: 1.125rem;

    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .svg {
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

  @keyframes motionY {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(10px, 40px, 0);
    }
  }
  @media (max-width: 980px) {
    figure {
      margin: 2rem 0;
    }
  }

  @media (max-width: 620px) {
    height: auto;
    background: radial-gradient(
      126.74% 315.18% at -7.92% 105.01%,
      #005bae 0%,
      #11a7f1 51.98%
    );
  }
`;

export const Content = styled.main`
  width: 100%;

  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding: 0 6rem;
  z-index: 100;

  > div {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > h1 {
      font-size: 3.125rem;
      text-transform: uppercase;
    }
    > p {
      font-size: 1.875rem;
      margin: 1.5rem 0;

      span {
        display: block;
        margin-top: 1.5rem;
      }
    }
    > span {
      a:nth-child(2) {
        margin: 0 1rem;
      }
      img {
        transition: 0.3s ease;
        &:hover {
          transform: scale(1.7);
        }
      }
    }
  }
  figure {
    img {
      width: 100%;
    }
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    justify-content: center;

    > div {
      width: 100%;

      align-items: center;
      text-align: justify;
    }
  }
  @media (max-width: 620px) {
    padding: 0 3rem;
    > div {
      p {
        text-align: center;
      }
    }
  }
`;
