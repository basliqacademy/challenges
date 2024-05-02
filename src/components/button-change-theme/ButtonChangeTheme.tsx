import React from "react";
import { ThemeContext } from "../../providers/Theme";
import { getNextTheme } from "../../utility/theme";

export function ButtonChangeTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function handleClick() {
    setTheme(getNextTheme(theme));
  }

  return <button onClick={handleClick}>change theme</button>;
}
