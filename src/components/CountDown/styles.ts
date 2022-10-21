import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;

  color: #dff6fe;
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    font-size: 1.5rem;

    margin: 4.5rem 0;
    letter-spacing: 0.25em;
    &:last-child {
      /* margin: 3rem 0; */
    }
  }
  @media (max-width: 960px) {
    h3 {
      &:first-child {
        margin: 4.5rem 0 3rem 0;
      }
      &:last-child {
        margin: 3rem 0 4rem 0;
      }
    }
    > div {
      width: 100%;
    }
  }
  @media (max-width: 490px) {
    width: 95%;
  }
`;
export const TimeNumbers = styled.div`
  text-align: center;

  span {
    font-style: normal;
    font-weight: 800;
    font-size: 8rem;
    text-align: center;
    letter-spacing: -0.02em;

    /* color: transparent;
    fill: transparent;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #ffdd17; */
    /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      180deg,
      rgba(236, 204, 21, 0.99) 24.17%,
      rgba(247, 93, 6, 0.99) 83.33%,
      rgba(252, 123, 4, 0.99) 83.33%
    ); */

    background: #1365ae;
    padding: 0rem 1.25rem;
    border-radius: 10px 0px 0px 10px;

    &.last-span {
      margin-left: 0.85rem;
      border-radius: 0 10px 10px 0;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    margin-top: 1rem;
  }
  @media (max-width: 1120px) {
    span {
      padding: 0rem 1rem;
      &.last-span {
        margin-left: 0.65rem;
      }
    }
  }
  @media (max-width: 960px) {
    span {
      font-weight: 700;
      font-size: 6rem;
    }
  }
  @media (max-width: 790px) {
    span {
      font-size: 5rem;
      &.last-span {
        margin-left: 0.35rem;
      }
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 620px) {
    span {
      padding: 0 0.75rem;
    }
    p {
      letter-spacing: 0.25em;
    }
  }
  @media (max-width: 560px) {
    span {
      font-size: 4rem;
    }
  }
  @media (max-width: 490px) {
    span {
      font-size: 3rem;
      border-radius: 4px 0px 0px 4px;
      padding: 0 0.5rem;
      &.last-span {
        border-radius: 0px 4px 4px 0px;
      }
    }
  }
  @media (max-width: 360px) {
  }
`;
