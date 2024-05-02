import { Theme } from "../providers/Theme";

export function getNextTheme(theme: Theme): Theme {
  switch (theme) {
    case "light":
      return "dark";
    case "dark":
      return "light";
  }
}
