import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Template = styled.section`
  background: linear-gradient(331.16deg, #abe9ff 8.61%, #11a7f1 88.25%);

  display: flex;
  flex-direction: column;

  align-items: center;

  > div {
    h3 {
      width: 50%;
      font-weight: 600;
      font-size: 1.875rem;
      line-height: 40px;

      margin: 10rem auto 0 auto;
      text-align: center;

      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  > button {
    font-weight: bold;
    font-size: 1rem;
    line-height: 19px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.secondary};
    background: transparent;
    border: 5px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;

    padding: 0.8rem 1.2rem;
    margin: 0 auto;
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 960px) {
    > div h3 {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 580px) {
    > div h3 {
      width: 90%;
      margin-top: 9rem;
    }
  }
`;

export const CardContent = styled(motion.main)`
  width: 60%;

  &:last-child {
    margin-bottom: 8rem;
  }

  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white};

  padding: 1rem;
  margin: 3rem auto;
  border-radius: 10px;

  display: flex;
  justify-content: flex-end;

  position: relative;

  > div {
    width: 380px;
    height: 238px;
    transform: translate3d(-100px, 0px, 0);

    display: flex;
    align-items: flex-end;
    justify-content: center;

    border: 3.8px solid #fff;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.blue100};
    filter: drop-shadow(5px 10px 30px rgba(153, 167, 189, 0.5));

    position: relative;
    padding-bottom: 1rem;

    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 8px;

      background: url('/svgs/circles.svg') center center no-repeat;
      width: 46px;
      height: 20px;
    }

    img {
      border-radius: 6px;
      margin: 1rem;
      transform: translateY(20px);
    }
  }

  > aside {
    width: 60%;

    h2 {
      font-weight: 800;
      font-size: 1.875rem;
      text-transform: uppercase;
    }

    p,
    li {
      font-size: 1.25rem;
    }

    p {
      margin: 1rem 0;
    }

    ul {
      margin-left: 2rem;
      li {
        list-style-type: disc;
        text-transform: capitalize;
      }
    }

    button {
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors.white};
      background: linear-gradient(91.8deg, #0995db -1.56%, #11a7f1 101.18%);
      filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.3));

      border-radius: 10px;
      padding: 1rem;
      margin: 4rem 0 1rem 0;

      transition: 0.3s ease;

      &:hover {
        filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.9));
        opacity: 0.9;
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: 960px) {
    height: auto;
    > div {
      display: none;
    }
    aside {
      width: 100%;
      position: relative;
      padding: 1.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        font-weight: 700;
        position: absolute;
        top: -30px;
        left: -40px;
        font-size: 1.45rem;

        color: #ffffff;
        background: ${({ theme }) => theme.colors.tertiary};
        border-radius: 17px;

        padding: 0.8rem 1rem;
      }

      p,
      li {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray300};
      }

      p {
        line-height: 2rem;
      }

      ul {
        margin-top: 1rem;
        margin-right: auto;
      }

      button {
        margin-bottom: auto;
      }
    }
  }

  @media (max-width: 680px) {
    width: 70%;
    aside {
      padding-bottom: 0;
    }
  }

  @media (max-width: 580px) {
    width: 80%;
    padding: 1rem;
    justify-content: flex-end;

    margin-top: 7rem;

    &:last-child {
      margin-top: 8rem;
    }

    aside {
      h2 {
        top: -55px;
        left: -40px;
      }
    }
  }

  @media (max-width: 440px) {
    transform: scale(0.9);
    &:last-child {
      margin-top: 3.5rem;
    }
    aside {
      h2 {
        top: -43px;
        left: -40px;
      }
      p {
        line-height: 2rem;
        margin-top: 3rem;
      }
    }

    aside {
      padding: 0;
    }
  }
`;
