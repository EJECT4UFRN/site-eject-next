import styled from "styled-components";

type ContainerProps = {
  bgImage: string;
};

export const Container = styled.section<ContainerProps>`
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  padding: 4rem 0;

  main {
    max-width: 1380px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 50%;

      @media (max-width: 1020px) {
        width: 40%;
      }
      @media (max-width: 960px) {
        display: none;
      }
    }
  }
`;
export const Aside = styled.aside`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  button {
    margin-top: 1.2rem;

    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1em;

    color: ${({ theme }) => theme.colors.white};
    background: linear-gradient(91.8deg, #0995db -1.56%, #11a7f1 101.18%);
    box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);

    border-radius: 10px;
    padding: 1rem 1.5rem;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.04);
      opacity: 0.9;
    }
  }

  @media (max-width: 1020px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
    align-items: center;
    padding: 0 2rem;
  }
`;
export const DemoPost = styled.div`
  max-width: 463px;
  height: 274px;

  padding: 1rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 8px #d4d4ea;
  border-radius: 10px;

  > div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.gray200};

    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    p {
      strong {
        display: block;
      }
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.blue300};
    font-size: 2rem;
    font-weight: 600;

    margin: 1rem 0 1.2rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.gray300};

    padding: 0.25rem 0.75rem 0.25rem 0;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 620px) {
    min-height: 330px;

    h3 {
      font-size: 1.8rem;
    }
    > div {
      flex-direction: column-reverse;

      span {
        margin: 0.75rem 0;
      }
    }
  }
  /* @media (max-width: 560px) {
      max-width: 500px;
      width: 100%;
      h3 {
        font-size: 1.65rem;
      }
    } */
`;
