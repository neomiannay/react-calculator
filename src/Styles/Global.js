import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Digit';
      src: url('assets/fonts/Digit.woff2') format('woff2'),
          url('assets/fonts/Digit.woff2') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  body {
    /* margin: 2rem; */
    background: #171526;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;