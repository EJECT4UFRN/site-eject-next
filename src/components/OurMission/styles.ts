import styled from 'styled-components';

export const Container = styled.div`
  height: 60vh;

  > main {
    max-width: 1380px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  position: relative;

  img {
    position: absolute;
    top: 10px;
    right: 0px;
  }
  @media (max-width: 960px) {
    > main {
      flex-direction: column;
    }
  }
  @media (max-width: 620px) {
    height: 40vh;
    img {
      transform: scale(0.65);
      top: 0px;
      right: -55px;
    }
  }
`;

export const Title = styled.h1`
  width: 60%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;

  letter-spacing: -0.035em;
  font-weight: 900;
  font-size: 6.25rem;
  line-height: 100px;
  text-transform: uppercase;

  margin-right: 1rem;

  span {
    margin-left: auto;
    padding-right: 0.5rem;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:nth-child(1) {
      background-image: linear-gradient(
        281.99deg,
        #ff9e16 7.44%,
        #ffcc01 94.78%
      );
    }
    &:nth-child(2) {
      background-image: linear-gradient(
        286.52deg,
        #e9340d -5.53%,
        #ffcc01 74.42%
      );

      padding-top: 0.5rem;
    }
  }
  @media (max-width: 1140px) {
    width: 75%;
  }
  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    margin-right: 0;
    span {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media (max-width: 820px) {
    flex-direction: column;
  }
  @media (max-width: 620px) {
    flex-direction: row;
    margin-right: 0;
    font-size: 4rem;
    justify-content: center;
    span {
      transform: translateX(-10px);
      margin: 0;
      &:nth-child(1) {
        text-align: right;
        padding: 0 1.25rem 0 0;
      }
      &:nth-child(2) {
        padding: 0;
        text-align: left;
      }
    }
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 60px;
  }
  @media (max-width: 340px) {
    font-size: 2.5rem;
    line-height: 60px;
  }
`;
export const Descrition = styled.div`
  margin-left: 1rem;
  z-index: 10;
  p {
    font-size: 1.5rem;
    width: 55%;

    color: ${({ theme }) => theme.colors.gray300};
  }

  button {
    display: inline-block;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    background: linear-gradient(93.64deg, #0678be 2.61%, #11a7f1 96.91%);
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};

    padding: 0.8rem 1.5rem;
    margin-top: 1rem;
    box-shadow: 0px 4px 15px 2px rgb(9 149 219 / 35%);
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.04);
      opacity: 0.9;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    margin: 2rem 0 0 0;
    p {
      margin: 0 auto;
    }
  }
  @media (max-width: 620px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    p {
      width: 80%;
    }
  }
`;
