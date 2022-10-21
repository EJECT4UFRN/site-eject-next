import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Exo 2', sans-serif;
    width: 100%;
    height: 100%;
    color: #fff;
    background: linear-gradient(275.04deg, #e4f3ff 1.05%, #f4f6fb 100%);
    overflow-x: hidden;
  }

  body,
  input,
  textarea,
  button {
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

/* Track */
  ::-webkit-scrollbar-track {
    background: #C2CBD9;
    height: 60px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.gray200};
}
`;
