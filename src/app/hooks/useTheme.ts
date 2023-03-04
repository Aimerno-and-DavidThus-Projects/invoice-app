import { useEffect, useState } from "react";

export enum themeValues {
  light = "1",
  dark = "2",
}

type themeValue = themeValues.light | themeValues.dark;

export const useTheme = (): {
  theme: themeValue;
  setTheme: (arg: themeValue) => void;
} => {
  let defaultTheme =
    (localStorage.getItem("theme") as themeValue) ||
    (matchMedia("(prefers-color-scheme: dark)").matches
      ? themeValues.light
      : themeValues.dark);

  const [theme, setTheme] = useState<themeValue>(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
