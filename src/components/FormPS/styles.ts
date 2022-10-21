import styled from 'styled-components';

export const Container = styled.div`
  background: #1365ae;
  max-width: 520px;
  width: 100%;
  margin: 2rem auto;
  padding: 2.5rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  button {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    background-color: #da8001;
    width: 100%;
    padding: 1rem 0;
    border-radius: 5px;
    margin-top: 3rem;
  }

  form {
    small {
      text-align: left;
      font-size: 14px;
      margin: 0.25rem 0 0.5rem auto;
      display: block;
    }
  }

  @media (max-width: 760px) {
    background: transparent;
  }
`;

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};

  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;

  svg {
    stroke: #1365ae;
    position: absolute;
    left: 16px;
  }
  input {
    width: 100%;
    border: 2px solid transparent;

    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 1rem 1rem 3.25rem;
    border-radius: 5px;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 21px;
    background: transparent;

    &::placeholder {
      color: #1365ae;
    }
  }
  input:focus {
    border: 2px solid #da8001;
  }
  input:focus + svg {
    stroke: #da8001;
  }
  @media (max-width: 760px) {
    input {
      background: #094781;
    }
  }
`;

export const Security = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
`;
