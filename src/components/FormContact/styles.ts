import styled from "styled-components";

export const Form = styled.form`
  width: 450px;
  height: 530px;

  background: #0678be;
  box-shadow: 5px 8px 15px rgba(6, 120, 190, 0.25);
  border-radius: 10px;

  padding: 2rem;
  > h2 {
    font-weight: bold;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.colors.white};
  }

  > button {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue200};
    border: 3px solid #ffffff;
    box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);
    border-radius: 10px;
    background-image: url("/svgs/airplain-paper.svg");
    background-repeat: no-repeat;
    background-position: 85%;
    filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.2));

    padding: 0.7rem 3rem 0.7rem 1.3rem;
    margin-top: 1.25rem;
    display: block;
    margin-left: auto;

    transition: 0.5s ease;

    &:hover {
      filter: drop-shadow(0px 4px 4px rgba(9, 149, 219));

      background-position: 92%;
    }
  }

  @media (max-width: 1060px) {
    width: 400px;
    height: 510px;
  }

  @media (max-width: 960px) {
    width: 550px;
  }

  @media (max-width: 510px) {
    width: 350px;
  }
  @media (max-width: 720px) {
    width: 350px;
    height: 460px;
  }
  @media (max-width: 420px) {
    width: 310px;
    height: 485px;
  }
  @media (max-width: 360px) {
    width: 270px;
    padding: 1rem;
    height: 470px;
  }
  small {
    font-size: 0.9rem;
    font-weight: 600;
    color: #ff9e16;
    top: 60px;
    left: 0;
    width: 100%;
  }
`;

export const Line = styled.div`
  margin-top: 0.9rem;
  font-size: 1.2rem;
  position: relative;
  label {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }
  input,
  textarea {
    font-size: 1.2rem;
    width: 100%;
    background: #ffffff;
    border-radius: 6px;
    padding: 0.4rem 0.8rem;
    margin-top: 0.25rem;
    box-shadow: 2px 8px 11px rgba(15, 16, 19, 0.2);
  }

  textarea {
    max-height: 90px;
    min-height: 90px;
    min-width: 100%;
    max-width: 100%;
    letter-spacing: 0;
    font-family: "Exo 2";
  }
  small {
    font-size: 0.9rem;
    font-weight: 600;
    color: #ff9e16;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
  }
  @media (max-width: 720px) {
    small {
      top: 50px;
    }
  }
`;
