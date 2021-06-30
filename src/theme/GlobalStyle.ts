import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}
`;
export default GlobalStyle;
