import styled from "styled-components";

export const Container = styled.div`
  > img {
    width: 100%;
  }
`;

export const Hero = styled.section`
  height: 50vh;
  margin-top: 6rem;

  background-image: url("/images/back-hero-sn.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-weight: bold;
    font-size: 3.1rem;
    width: 50%;
    text-align: center;
    z-index: 2;
  }

  img {
    position: absolute;
    right: 0;
  }

  @media (max-width: 960px) {
    margin-top: 3rem;
    h1 {
      width: 70%;
    }
    img {
      transform: scale(0.85);
      right: -20px;
    }
  }
  @media (max-width: 660px) {
    h1 {
      width: 80%;
    }
    img {
      transform: scale(0.7);
      right: -40px;
    }
  }
  @media (max-width: 480px) {
    h1 {
      width: 90%;
    }
    img {
      transform: scale(0.5);
      right: -60px;
      top: -60px;
    }
  }
`;

export const TextContent = styled.section`
  display: flex;
  justify-content: center;

  padding: 1rem;
  div:first-child {
    width: 40%;
    padding-right: 2rem;
    h2 {
      font-size: 2rem;
      font-weight: 600;

      text-align: right;

      width: 80%;
      margin-left: auto;
      margin-top: 1rem;

      color: ${({ theme }) => theme.colors.blue300};
    }
  }
  div:last-child {
    width: 60%;
    > p {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.75rem;

      width: 90%;

      color: ${({ theme }) => theme.colors.gray300};

      &:first-child {
        margin: 1rem 0 2rem 0;
      }
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
    div:first-child {
      width: 90%;
      h2 {
        text-align: center;
      }
    }
    div:last-child {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      > p {
        text-align: justify;
        line-height: 2.5rem;
        width: 100%;
      }
    }
  }
  @media (max-width: 540px) {
    div:first-child {
      width: 100%;
      padding: 0;
      margin: 0 auto;
      text-align: center;
      h2 {
        margin: 0 auto;
        width: 100%;
      }
    }
  }
`;

export const Recognition = styled.section`
  text-align: center;

  main {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  background: ${({ theme }) => theme.colors.tertiary};

  main > div {
    max-width: 1280px;
    width: 60%;
    margin: 0 auto;
    padding: 3rem 0 7rem 0;
    > h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    > span {
      width: 100%;
      display: flex;
      align-items: center;

      margin-top: 2.5rem;

      h1 {
        font-size: 5rem;
        font-weight: bold;
        text-align: left;
        width: 30%;
        color: rgba(250, 215, 189, 0.62);
      }

      p {
        font-weight: 600;
        font-size: 1.5rem;
        text-align: left;
        width: 70%;

        color: ${({ theme }) => theme.colors.white};

        margin-left: 1.25rem;
      }
    }
  }
  @media (max-width: 980px) {
    main > div {
      width: 80%;
    }
  }
  @media (max-width: 680px) {
    main > div {
      width: 90%;
    }
  }
  @media (max-width: 560px) {
    main > div {
      > span {
        flex-direction: column;
        justify-content: center;
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
`;

export const ProSempre = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  /* background-image: url('/images/back-galaxy.png'); */
  background-size: cover;
  background-position: center center;

  > div {
    max-width: 1280px;
    width: 100%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo-pro-sempre {
      max-width: 480px;
      transform: translateX(-60px);
      position: relative;

      span {
        color: #ffcc01;
        font-size: 2.5rem;
        font-weight: bold;

        position: absolute;
        top: 0;
        left: 340px;
      }
    }

    div {
      width: 50%;

      margin: 8rem 0;

      &:first-child {
        justify-self: flex-end;
      }
      &:last-child {
        padding-left: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          font-size: 1.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          width: 90%;

          margin-bottom: 1.5rem;
        }

        > button {
          width: 12.5rem;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;

          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.blue100};

          border-radius: 10px;
          padding: 0.8rem 1.5rem;
          transition: 0.3s ease;

          &:hover {
            box-shadow: 0px 4px 15px 2px rgba(9, 149, 219, 0.35);
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    > div {
      flex-direction: column;

      .logo-pro-sempre {
        padding: 0 1rem;
        transform: translateX(0px);
        span {
          left: 300px;
        }
      }

      div {
        max-width: 90%;
        width: 100%;
        &:first-child {
          margin: 3rem 0 2rem 0;
          text-align: center;
        }
        &:last-child {
          margin: 2rem 0;
          padding: 0;
          text-align: center;

          p {
            margin: 0 auto 1.5rem auto;
            width: 80%;
          }

          > button {
            margin: 0 auto;
          }
        }
      }
    }
  }
  @media (max-width: 560px) {
    > div div {
      &:first-child {
        img {
          width: 80%;
        }
      }
      &:last-child {
        p {
          width: 90%;
        }
      }
    }
    > div {
      .logo-pro-sempre {
        span {
          left: 260px;
        }
      }
    }
  }
  @media (max-width: 420px) {
    > div {
      .logo-pro-sempre {
        span {
          left: 220px;
        }
      }
    }
  }
`;
