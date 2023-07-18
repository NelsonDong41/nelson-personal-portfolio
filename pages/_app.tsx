import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useMemo, useState, createContext } from "react";
import { getDesignTokens } from "@/styles/theme";
import { ColorModeContent } from "@/types";


export const ColorModeContext = createContext<ColorModeContent>({
  toggleColorMode: () => {}
})

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevColor: PaletteMode) =>
          prevColor === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  console.log(mode)
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
