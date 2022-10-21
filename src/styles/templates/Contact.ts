import styled from 'styled-components';

export const MasterSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  > h2 {
    display: none;
  }
  > p {
    font-size: 1.5rem;
    max-width: 65%;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray300};

    margin: 2rem auto;
  }
  > main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 4rem;
  }
  > div {
    text-align: center;

    margin: 3rem auto;
    span {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondary};

      padding: 0 1.5rem;

      &:nth-child(2) {
        border-left: 1px solid ${({ theme }) => theme.colors.secondary};
        border-right: 1px solid ${({ theme }) => theme.colors.secondary};
      }

      a {
        &:nth-child(2) {
          margin: 0 1rem;
        }

        img {
          transition: 0.3s ease;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    background: linear-gradient(
      160.47deg,
      #fe9d23 9.66%,
      rgba(237, 155, 52, 0.61) 49.66%,
      rgba(134, 209, 250, 0.78) 71.1%
    );
    height: 200vh;
    > h2 {
      display: block;
      font-size: 2rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(30px);
    }
    > p {
      display: none;
    }
    > main {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    > div {
      display: none;
    }
  }
`;
