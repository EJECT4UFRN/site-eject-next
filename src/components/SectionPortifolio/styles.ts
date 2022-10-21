import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};

  padding: 3rem 1rem;
  margin: 0 auto;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  h2 {
    font-size: 2.5rem;

    text-align: center;
    margin-bottom: 4rem;
  }

  > button {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    border: 3px solid #fff;

    border-radius: 10px;
    padding: 0.75rem 2.25rem;
    margin-top: 5rem;
    z-index: 10;
    position: relative;
    z-index: 1;

    &:before {
      transition: 0.5s all ease-out;
      position: absolute;
      top: -2px;
      left: 50%;
      right: 50%;
      bottom: -2px;
      opacity: 0;
      content: "";
      background: #fff;
      border-radius: 6px;
    }
    &:hover {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.secondary};
      box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.5);
      &:before {
        transition: 0.5s all ease;
        left: -2px;
        right: -2px;
        opacity: 1;
        z-index: -1;
      }
    }
  }
`;

export const SlideItem = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 15px;

  /* width: 510px; */
  /* height: 334.28px; */
  padding: 0.75rem;

  img {
    flex: 1;
    width: 480px;
    height: 280px;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-bottom: 0.75rem;
  }
`;

export const Circle = styled.span`
  width: 20px;
  height: 20px;

  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 100%;
`;
