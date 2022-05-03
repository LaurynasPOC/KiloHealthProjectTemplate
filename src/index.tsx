import React, { StrictMode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;

    }
    body{
        overflow: hidden auto;
    }
    html {
        font-family: ${theme.fontFamily};
    }

`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </StrictMode>
);
