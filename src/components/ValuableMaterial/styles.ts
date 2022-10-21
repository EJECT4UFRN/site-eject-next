import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue200};

  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 860px) {
    div {
      flex-direction: column;
      padding: 1rem;
    }
  }
`;

export const Book = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url("/svgs/circles-book.svg");
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 860px) {
    background-size: contain;
  }

  img {
    max-width: 360px;
    max-height: 360px;
  }

  @media (max-width: 520px) {
    img {
      max-width: 240px;
      max-height: 240px;
    }
  }
`;
export const Content = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.2rem;
    max-width: 420px;
    margin-right: auto;
  }

  button {
    font-weight: bold;
    font-size: 0.8rem;
    width: 15rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);

    border-radius: 8px;
    border: 2.5px solid ${({ theme }) => theme.colors.white};
    padding: 0.6rem 1.8rem;
    margin-top: 2rem;
    margin-right: auto;
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
      content: "";
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
  @media (max-width: 860px) {
    h1,
    button {
      margin: 1rem auto;
      text-align: center;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;
