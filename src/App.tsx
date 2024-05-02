import React from "react";
import { ThemeContext } from "./providers/Theme";
import { ButtonChangeTheme } from "./components/button-change-theme/ButtonChangeTheme";
import { useDictionary } from "./hooks/useDictionary";
import { ButtonChangeLanguage } from "./components/button-change-language/ButtonChangeLanguage";

export function App() {
  const { theme } = React.useContext(ThemeContext);
  const d = useDictionary();

  return (
    <div className="app" data-theme={theme} lang="fa-IR" dir="rtl">
      <p>{d.root.test}</p>
      <ButtonChangeTheme />
      <ButtonChangeLanguage />
    </div>
  );
}
