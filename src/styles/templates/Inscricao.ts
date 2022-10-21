import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FinishedSubscribe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;
