import React from "react";
import { ThemeContext } from "./providers/Theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/main";
import { LanguageContext } from "./providers/Language";

export function App() {
  const { theme } = React.useContext(ThemeContext);
  const { lang, dir } = React.useContext(LanguageContext);

  return (
    <div className="app" data-theme={theme} lang={lang} dir={dir}>
      <RouterProvider router={router} />
    </div>
  );
}
