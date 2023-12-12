import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useMemo, useState, createContext, useEffect } from "react";
import { getDesignTokens } from "@/styles/theme";
import CursorEffect from "@/lib/cursorEffect";
import { useRouter } from "next/router";
import { ColorModeContent } from "@/lib/types";

export const ColorModeContext = createContext<ColorModeContent>({
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>("dark");
  const router = useRouter();
 

  // useEffect(() => {
  //   setMode(prefersDarkMode ? "dark" : "light")
  // }, [prefersDarkMode])

  useEffect(() => {
    CursorEffect();
  }, [router.asPath]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevColor: PaletteMode) =>
          prevColor === "light" ? "dark" : "light"
        ),
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
