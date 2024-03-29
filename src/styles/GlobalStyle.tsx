import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  /** ❗ setting app container  */
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
   a, ul {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
  margin: 0;
  }
  img {
    display: block;
  }
  
  .display-none {
    display: none;
  }

  /** ❗ setting app container  */
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  
  
  noscript {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 8px 16px;
    background-color: #e10050;
    color: #fff;
    font-size: 24px;
    font-family: sans-serif;
  }
`;
