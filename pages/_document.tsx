import { CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <Html>
        <Head>
          <link rel="icon" href="/icon.ico" sizes="any" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="cursor"></div>
        </body>
      </Html>
    </>
  );
}
