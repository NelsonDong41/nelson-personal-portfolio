import { CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <Html>
        <Head>
          {/* following is only for development*/}
          {/* <script src="http://localhost:8097"></script> */}
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
