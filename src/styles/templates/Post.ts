import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1260px;
  width: 100%;
  /* min-height: 260vh; */
  margin: 0 auto;
  display: flex;
  padding: 2rem 1rem;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  padding: 1.25rem 1.25rem 0 0;
  border-right: 1px solid #cde5f7;
  color: ${({ theme }) => theme.colors.gray300};
  display: grid;
  justify-content: space-between;

  @media (max-width: 760px) {
    align-items: flex-start;
    padding: 1.5rem 0 0 1.5rem;

    border-right: none;
  }
`;

export const Header = styled.header`
  h1 {
    color: ${({ theme }) => theme.colors.blue300};
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 40px;
    text-align: right;
  }
  div {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      box-shadow: 3px 4px 8px rgba(17, 167, 241, 0.36);
    }
    span {
      font-size: 1.1rem;
      strong {
        display: block;
      }
    }
  }

  @media (max-width: 760px) {
    div {
      justify-content: flex-start;
      margin-bottom: 2rem;
    }
    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
      text-align: left;
    }
  }
`;
export const OtherPosts = styled.nav`
  /* display: grid;
  grid-gap: 1rem; */
  margin-top: auto;

  @media (max-width: 760px) {
    display: none;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1rem;
    margin: 6rem 0 2rem 0;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    > div {
      box-shadow: 4px 4px 8px #d4d4ea;
      border-radius: 10px;
      width: 260px;
      background-color: ${({ theme }) => theme.colors.white};

      max-height: 300px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      padding: 0.75rem;

      img {
        width: 100%;
        height: 120px;
        border-radius: 0.5rem;
      }
      h4 {
        color: ${({ theme }) => theme.colors.blue300};
        font-size: 1.1rem;
        font-weight: 600;
      }

      a {
        color: ${({ theme }) => theme.colors.gray400};
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export const Right = styled.aside`
  padding: 1.5rem 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 1.2rem;

  line-height: 30px;

  letter-spacing: -0.05em;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    color: ${({ theme }) => theme.colors.blue300};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue300};
  }

  ul,
  li,
  p + p {
    margin-top: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.blue300};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin: 0 auto;
  }

  .preview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.5px;
    padding: 0.75rem;
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.colors.blue200};
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s ease;
    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 760px) {
    padding: 1.5rem 1rem 0 1rem;

    text-align: justify;
    line-height: 26px;

    h2 {
      text-align: left;
    }
  }
`;
