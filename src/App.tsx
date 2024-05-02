import React from "react";
import { ThemeContext } from "./providers/Theme";
import { ButtonChangeTheme } from "./components/button-change-theme/ButtonChangeTheme";

export function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="app" data-theme={theme} lang="fa-IR" dir="rtl">
      <p>it renders!</p>
      <ButtonChangeTheme />
    </div>
  );
}
