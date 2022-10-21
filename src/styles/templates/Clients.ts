import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-top: 6rem;

  background: url("/images/back-contacts.jpg");
  background-size: cover;
  background-position: center center;

  h1 {
    font-size: 3.75rem;
    font-weight: bold;
    width: 50%;
  }

  @media (max-width: 960px) {
    margin-top: 4rem;
    h1 {
      width: 80%;
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 3rem;
      width: 90%;
    }
  }
`;

export const Main = styled.main`
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;

    width: 70%;

    color: ${({ theme }) => theme.colors.gray200};
    margin: 4rem auto 2.5rem auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    flex-wrap: wrap;

    max-width: 980px;
    width: 100%;
    margin: 2rem auto 8rem auto;
  }

  @media (max-width: 1090px) {
    > div {
      max-width: 860px;
    }
  }
  @media (max-width: 960px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 8px rgba(6, 120, 190, 0.31);
  border-radius: 10px;
  padding: 1rem;

  > div {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 250px;
    img {
      width: 100%;
    }
  }

  > aside {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue300};
      margin: 1rem 0;
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray200};
    }
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 2.5rem;
    margin: 1.25rem 0 1.5rem 0;
    background-color: ${({ theme }) => theme.colors.blue200};
    filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.4));
    border-radius: 10px;
    transition: 0.3s ease;

    &:hover {
      filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.9));
      opacity: 0.9;
    }
  }
  @media (max-width: 1090px) {
    width: 270px;
  }
  @media (max-width: 960px) {
    max-width: 90%;
    width: 100%;
    flex-direction: row;

    padding: 2rem;

    :nth-child(2) {
      margin: 3rem 0;
    }

    > aside {
      align-items: flex-start;
      margin-left: 1rem;
      p {
        text-align: left;
      }
    }
  }
  @media (max-width: 620px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    > div {
      transform: translateY(40px);
    }
    button {
      margin-bottom: 0.5rem;
    }
  }
`;
