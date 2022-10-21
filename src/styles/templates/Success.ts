import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Wrapper = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
    > img {
      width: 200px;
      transform: rotate(20deg);
    }
  }
  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    > div:first-child {
      display: none;
    }
  }
`;
export const Aside = styled.div`
  margin-top: -4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  div {
    display: flex;
    align-items: center;
    &:first-child {
      h1 {
        font-size: 3.2rem;
        margin-left: 1.5rem;
      }
    }
  }
  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    color: rgb(230, 230, 230);

    padding: 1.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  }
  p {
    font-size: 1.15rem;
    padding: 1rem 0;
    color: rgb(220, 220, 220);
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;
    width: 100%;

    color: #ff9e16;
    text-decoration: underline;
    font-weight: 500;

    background: linear-gradient(
      180deg,
      #085aa3 0%,
      rgba(19, 89, 150, 0.24) 100%
    );
    border-radius: 6px;
    cursor: pointer;
    margin: 1rem 0 2.2rem 0;

    svg {
      margin-right: 0.5rem;
    }
  }

  button {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    background: #e99013;
    border-radius: 5px;

    padding: 1rem 2rem;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
  @media (max-width: 920px) {
    margin-top: 0;
    width: 50%;
    button {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    width: 70%;
  }
  @media (max-width: 560px) {
    width: 90%;
  }
`;
