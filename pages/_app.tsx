import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useMemo, useState, createContext, useEffect } from "react";
import { getDesignTokens } from "@/styles/theme";
import { ColorModeContent } from "@/types";

const sectionNames = ["Section1", "Section2", "Section3", "Section4"]

export const ColorModeContext = createContext<ColorModeContent>({
  toggleColorMode: () => {}
})

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [selectedSection, setSelectedSection] = useState<String>(sectionNames[0])

  

  useEffect(() => {
    setMode(localStorage.getItem('mode') === "dark" ? "dark" : "light")
  }, [])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevColor: PaletteMode) => {
          const newMode = prevColor === "light" ? "dark" : "light"
          localStorage.setItem('mode', newMode)
          return newMode;
        }
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
