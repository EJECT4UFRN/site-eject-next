import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const ListPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.8rem;

  @media (max-width: 840px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Post = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 840px) {
    align-items: center;
  }

  h2 {
    font-weight: 800;
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  div {
    padding: 1rem 0 0.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.gray300};
      strong {
        text-transform: capitalize;
      }
      &:nth-child(2) {
        margin: 2rem 0 0.3rem 0;
      }

      margin: 0.2rem 0 0.5rem 0;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  a img {
    width: 400px;
    max-height: 200px;
    border-radius: 0.8rem;
  }
`;
