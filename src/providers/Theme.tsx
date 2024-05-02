import React from "react";

export type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// @ts-expect-error bypassing null checking by not providing a null
export const ThemeContext = React.createContext<ThemeContext>({});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
