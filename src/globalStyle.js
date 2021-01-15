import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Cormorant', serif;
    overflow-x: hidden;
    background-color: #ECEEE8;
  }

  img{
    max-height: 400px;
  }
  
`

export default GlobalStyle;