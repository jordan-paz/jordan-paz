import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto:700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    background-color: #212121;
    color: #fff;
    padding: 40px;
    max-width: 900px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
