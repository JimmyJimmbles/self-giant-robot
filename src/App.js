import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Main } from './Layout';

// Set global styles
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);

export default App;
