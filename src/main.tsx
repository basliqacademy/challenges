import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/index.css";
import { ThemeProvider } from "./providers/Theme.tsx";
import { LanguageProvider } from "./providers/Language.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
