import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16rem 0;

  @media (max-width: 620px) {
    margin: 1rem 0;
  }

  video {
    width: 70%;
    border-radius: 0.8rem;
    box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.5);
  }
  iframe {
    width: 60%;
    height: 60vh;
    border-radius: 0.8rem;
    box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
  @media (max-width: 720px) {
    iframe {
      height: 50vh;
      width: 80%;
    }
  }
`;

export const Controls = styled.div`
  width: 70%;
  z-index: 99;
  height: 50px;
  display: flex;
  align-items: center;

  transform: translate3d(0, -50px, 0);

  button {
    width: 42px;
    height: 42px;
    background: transparent;
    background-image: url('/svgs/buttonPlay.svg');
    background-position: center 8px;
    background-repeat: no-repeat;
    margin: 0 1rem;

    &.pause {
      background-image: url('/svgs/buttonPause.svg');
    }
  }
  input {
    cursor: pointer;
    width: 90%;
  }
`;
