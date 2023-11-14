import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: ${props => props.theme.backgroundColor};
      height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Press Start 2P', cursive;
      color: ${props => props.theme.fontColor};
    }

    p, label {
      font-family: 'Press Start 2P', cursive;
      color: ${props => props.theme.fontColor};
    }

    a {
      text-decoration: none;
      font-family: 'Press Start 2P', cursive;
    }

    li {
      font-family: 'Press Start 2P', cursive;
    }
`

export default GlobalStyle