import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: 60vh;
  background: url("/images/back-contact.jpg");
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: bold;
    font-size: 3.125rem;

    text-align: center;

    max-width: 60%;

    color: ${({ theme }) => theme.colors.white};
  }
  > p {
    display: none;
  }

  @media (max-width: 920px) {
    margin-top: 2rem;
  }

  @media (max-width: 720px) {
    background: url("/images/contact.png") center center no-repeat cover;

    > h1 {
      display: none;
    }
    > p {
      color: white;
      display: block;
      font-weight: 600;
      text-align: center;
      font-size: 1.5rem;

      width: 80%;
    }
  }
`;
