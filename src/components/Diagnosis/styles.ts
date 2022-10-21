import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    width: 40%;

    margin: 6rem 0 2rem 0;
    z-index: 10;
  }

  > button {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    border: 3px solid #fff;

    border-radius: 10px;
    padding: 0.75rem 2.25rem;
    margin-bottom: 8rem;
    z-index: 10;
    position: relative;
    z-index: 1;

    &:before {
      transition: 0.5s all ease-out;
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
      color: ${({ theme }) => theme.colors.secondary};
      box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.5);
      &:before {
        transition: 0.5s all ease;
        left: -2px;
        right: -2px;
        opacity: 1;
        z-index: -1;
      }
    }
  }

  @media (max-width: 920px) {
    h1 {
      width: 60%;
    }
  }
  @media (max-width: 580px) {
    h1 {
      width: 80%;
    }
  }
`;
