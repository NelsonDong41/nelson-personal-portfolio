import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useMemo, useState, createContext, useEffect } from "react";
import { getDesignTokens } from "@/styles/theme";
import CursorEffect from "@/lib/cursorEffect";
import { useRouter } from "next/router";
import { ColorModeContent, MobileViewContent } from "@/lib/types";
import ScrollToTop from "@/components/Buttons/ScrollToTop";

export const ColorModeContext = createContext<ColorModeContent>({
  toggleColorMode: () => {},
  colorMode: () => "dark",
});

export const MobileViewContext = createContext<MobileViewContent>({
  isMobileView: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const router = useRouter();

  const colorModeMemo = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevColor: PaletteMode) =>
          prevColor === "light" ? "dark" : "light"
        ),
      colorMode: () => mode,
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode, isMobileView)),
    [mode, isMobileView]
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("laptop"));

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
    setIsMobileView(isMobile);
  }, [prefersDarkMode, isMobile]);

  // reapply cursor effect when on different page
  useEffect(() => {
    CursorEffect();
  }, [router.asPath]);

  return (
    <>
      <ColorModeContext.Provider value={colorModeMemo}>
        <ThemeProvider theme={theme}>
          <MobileViewContext.Provider value={{ isMobileView }}>
            <CssBaseline />
            <Component {...pageProps} />
            {!isMobileView && <ScrollToTop />}
          </MobileViewContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
