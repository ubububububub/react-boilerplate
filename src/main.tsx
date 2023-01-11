import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
