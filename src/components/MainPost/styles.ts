import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  width: 100%;

  > div {
    background-color: #c2c2c2;
    border-radius: 0.8rem;
    width: 540px;
    height: 320px;
  }

  img {
    border-radius: 0.8rem;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
`;
export const InfoPost = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 290px;

  > span {
    strong {
      text-transform: capitalize;
    }
    color: ${({ theme }) => theme.colors.gray300};
    &:last-child {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        display: block;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .post-resume {
    p {
      font-size: 0.95rem;

      font-size: 1.1rem;
      margin: 0.6rem 0;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 800;
  }

  img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
  }

  @media (max-width: 840px) {
    max-width: 100%;
  }
`;
