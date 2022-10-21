import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  strong,
  > p {
    font-size: 1.25rem;
    font-weight: 700;
  }

  > main {
    width: 520px;
    height: 440px;

    margin-top: 2rem;
    filter: drop-shadow(4px 4px 15px rgba(153, 167, 189, 0.5));
    border-radius: 10px;
    iframe {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: none;
    }
  }

  @media (max-width: 1060px) {
    > main {
      width: 460px;
      height: 420px;
    }
  }
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    > div {
      margin: 2rem 0;
      color: ${({ theme }) => theme.colors.white};
    }

    > main {
      width: 550px;
      height: 420px;
      margin-top: 0;
    }
  }

  @media (max-width: 720px) {
    > main {
      width: 400px;
      height: 300px;
    }
  }

  @media (max-width: 510px) {
    > main {
      width: 350px;
      height: 280px;
    }
  }
  @media (max-width: 420px) {
    > main {
      width: 310px;
      margin: 0 auto;
    }
    > div {
      width: 80%;
      margin: 2rem auto;
    }
  }
  @media (max-width: 360px) {
    > main {
      width: 270px;
    }
  }
`;
