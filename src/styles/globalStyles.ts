import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle<{ theme: any}>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Golos Text', sans-serif;
    background: #f7f7f7;
  }
`
 
export default GlobalStyle