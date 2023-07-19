import { useTheme } from '@mui/material';
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  const theme = useTheme();
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}