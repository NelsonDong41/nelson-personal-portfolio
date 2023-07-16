
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
