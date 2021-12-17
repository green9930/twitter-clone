import { createGlobalStyle } from 'styled-components';
import { calcRem, colors } from 'theme/theme';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
  }
  
  body {
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0px;
  }

  button {
    border-radius: ${calcRem(32)};
    padding: ${calcRem(8)};
  }

  input {
    box-sizing: border-box;
    padding: ${calcRem(8)};
    border: 1px solid ${colors.blue};
    border-radius: ${calcRem(32)};

    :focus {
      outline: none;
      border: 2px solid ${colors.blue};
    }
  }

  button:focus,
  a:focus {
    outline: 1px solid ${colors.blue}
  }
`;

export default GlobalStyle;
