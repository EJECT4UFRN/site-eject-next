import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue300};

  padding: 2rem 0;

  main {
    max-width: 1380px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  footer {
    text-align: center;
    margin-top: 2rem;
  }
`;
export const Logo = styled.div`
  text-align: center;
`;
export const Material = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4rem;

  h4 {
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 30px;

    max-width: 50%;
  }
  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 4.5rem;

    line-height: 93%;
    padding: 1rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    margin: 0 auto;

    div {
      max-width: 800px;
      margin: 1.5rem 0;

      h4 {
        margin: 0 auto;
        max-width: 70%;
      }
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 460px) {
    h1 {
      font-size: 2.5rem;
      margin: 0 1rem;
    }
  }
`;

export const Box = styled.section`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url('/svgs/circles-book.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  img {
    max-width: 320px;
  }

  @media (max-width: 760px) {
    img {
      max-width: 350px;
      max-height: 350px;
    }
  }
`;

export const Button = styled.button`
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
`;
export const Glass = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 6rem auto 0 auto;

  display: flex;
  justify-content: center;

  gap: 5rem;

  padding: 4.5rem 3rem;
  margin-top: 6rem;

  background: linear-gradient(
    102.66deg,
    rgba(245, 251, 255, 0.1) 8.28%,
    rgba(250, 253, 255, 0.28) 50.47%,
    rgba(255, 255, 255, 0.2) 92.84%
  );
  backdrop-filter: blur(45px);

  border-radius: 26px;

  div {
    &:first-child {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:last-child {
      width: 55%;
    }
  }

  p {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 35px;
  }

  span {
    display: block;
    margin-top: 3rem;

    font-weight: 500;
    font-size: 0.95rem;
    line-height: 18px;
  }

  strong {
    margin-top: 1rem;
    display: block;
    font-size: 1.25rem;
  }

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 680px;
    padding: 2rem 2rem;
    div {
      &:last-child {
        width: 100%;
      }

      &:first-child {
        max-width: 300px;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
`;

export const Modal = styled.div``;
