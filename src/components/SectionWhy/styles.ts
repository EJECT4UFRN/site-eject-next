import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.2em;
    margin: 10rem 0 1rem 0;
  }
  @media (max-width: 768px) {
    h2 {
      margin: 5rem 0 1rem 0;
    }
  }
  > div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem auto;
    &:nth-child(3) {
      margin-bottom: 4rem;
    }
    span {
      display: flex;
      width: 45%;

      align-items: center;

      div {
        width: 64px;
        img {
          width: 100%;
        }
      }

      p {
        text-align: left;
        margin-left: 0.85rem;
        font-size: 1.25rem;
        line-height: 25px;
      }
    }
  }

  @media (max-width: 960px) {
    > div {
      flex-direction: column;
      span {
        justify-content: center;

        width: 90%;
        margin: 0 auto;
      }
      span + span {
        margin-top: 2rem;
      }
    }
  }
`;
