import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1060px;

  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 960px) {
    flex-direction: column;
    height: 80vh;
  }
  @media (max-width: 670px) {
    margin-top: 1rem;
    height: 60vh;
  }
`;

export const Accountant = styled.div`
  width: 300px;
  height: 200px;

  &:nth-child(2) {
    margin: 0 2rem;
  }

  background: linear-gradient(110.64deg, #ffffff 1.52%, #f6f9ff 100%);
  box-shadow: 4px 4px 8px #e0e5f1;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 4.75rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  > p {
    text-align: center;

    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray400};
  }

  @media (max-width: 1080px) {
    transform: scale(0.9);
    &:nth-child(2) {
      margin: 0 1rem;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    padding: 2rem 4rem;

    p {
      margin-left: 1rem;
    }
  }

  @media (max-width: 670px) {
    padding: 0rem 3rem;
    height: 150px;
    h2 {
      font-size: 4.5rem;
      white-space: nowrap;
    }
    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 580px) {
    height: 140px;
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 0rem 2rem;
    h2 {
      font-size: 4rem;
      white-space: nowrap;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;
