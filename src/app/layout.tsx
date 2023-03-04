import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global/theme";
import { themeValues, useTheme } from "./hooks/useTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <html lang="en">
      <ThemeProvider
        theme={theme === themeValues.light ? lightTheme : darkTheme}
      >
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
