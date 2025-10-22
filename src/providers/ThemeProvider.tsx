import { createContext, useEffect, useReducer } from "react";
import { themeReducer } from "./themeReducer";

export type Theme = "dark" | "light" | "system";

export interface IThemeContextState {
  theme: Theme;
  handleChangeTheme: (theme: Theme) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({} as IThemeContextState);

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-schema: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: (localStorage.getItem("theme") as Theme) || "system",
  });

  const handleChangeTheme = (theme: Theme) => {
    dispatch({ type: "set-theme", payload: theme });
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const isDesired = state.theme === "system" ? getSystemTheme() : state.theme;
    root.classList.toggle("dark", isDesired === "dark");
  }, [state.theme]);


  return (
    <ThemeContext value={{ theme: state.theme, handleChangeTheme }}>
      {children}
    </ThemeContext>
  );
};
