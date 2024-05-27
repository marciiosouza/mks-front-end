import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    height: 100%;
    -webkit-font-smoothing: antialiased; 

    font-family: "Montserrat", sans-serif;
    /* font-weigth: 400; */

  }

  body {
    font-size: 1.1rem;
  }


  @media screen and (max-width: 938px) {
    .page {
      padding: 0 62px;
    }
  }

`
