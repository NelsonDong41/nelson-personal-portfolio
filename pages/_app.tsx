import { CssBaseline, ThemeProvider, createTheme, useTheme } from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
