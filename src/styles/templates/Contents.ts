import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4.5rem;
  }
`;
export const SectionPosts = styled.div`
  max-width: 980px;

  padding: 2rem;
`;

export const Button = styled.button`
  width: 100%;

  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};

  margin: 2rem auto;
`;
