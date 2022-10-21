import styled from 'styled-components';

interface ContainerProps {
  back: string;
}

export const Container = styled.main<ContainerProps>`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: url(${({ back }) => back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  > img {
    position: absolute;
    right: 0;
    top: 25%;
  }

  > div {
    max-width: 1080px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    z-index: 10;

    > div {
      align-self: flex-start;
      margin-top: 2.5rem;
      width: 45%;

      h3 {
        font-size: 1.875rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray200};
      }
      h1 {
        font-size: 3.125rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondary};
        line-height: 2.65rem;

        margin: 1rem 0 2rem 0;
        span {
          display: block;
        }
      }
      button {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.2rem;

        background: linear-gradient(92.07deg, #0995db 1.84%, #11a7f1 100%);
        color: ${({ theme }) => theme.colors.white};
        filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.35));

        padding: 0.8rem 2.75rem;
        border-radius: 10px;
        position: relative;
        transition: filter 0.5s ease;

        &:after {
          content: '';
          position: absolute;
          top: 18px;
          left: 270px;

          width: 5px;
          height: 5px;

          border-bottom: 3.2px solid ${({ theme }) => theme.colors.white};
          border-right: 3.2px solid ${({ theme }) => theme.colors.white};
          border-radius: 10px;

          transform: rotate(320deg);
          transition: 0.5s ease;
        }
        &:hover {
          transform: scale(1.02);
          filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.9));
          &:after {
            transform: translateX(10px);
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    background-image: none;
    > img {
      width: 30%;
      z-index: 11;

      top: 10%;
    }

    height: 800px;
    > div {
      height: 700px;
      width: 100%;

      margin-top: 70px;

      position: absolute;
      top: 0;
      left: 0;

      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      > div {
        align-self: center;
        text-align: center;
        width: 100%;
      }
    }
    > div div button {
      &:after {
        top: 17px;
        left: 250px;
      }
    }
  }
  @media (max-width: 780px) {
    > div div button {
      &:after {
        top: 17px;
        left: 250px;
      }
    }
  }
  @media (max-width: 720px) {
    > div div button {
      &:after {
        top: 16px;
        left: 230px;
      }
    }
  }

  @media (max-width: 490px) {
    height: 700px;
    > div {
      margin-top: 0;
    }
  }
`;

export const Figure = styled.figure<ContainerProps>`
  div {
    width: 411px;
    height: 406px;
  }

  @media (min-width: 1580px) {
    div {
      width: 500px;
      height: 486px;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    height: 100%;

    background: url(${({ back }) => back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  @media (max-width: 580px) {
    div {
      width: 350px;
      height: 325px;
    }
  }
  @media (max-width: 490px) {
    height: 55%;

    div {
      width: 320px;
      height: 305px;
    }
  }
`;
