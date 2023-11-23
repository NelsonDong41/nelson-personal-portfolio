import { PaletteMode, ThemeOptions } from "@mui/material";
import { BreakPoints } from "./breakpoints";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#f1ad41",
          },

          secondary: {
            main: "#f8d6a0",
          },

          accent: "#be7a0e",

          background: {
            default: "#fdf3e3"
          },

          text: {
            primary: "#2f1f04",
          },
        }
      : {
          background: {
            default: '#011627',
            paper: '#0b253a',
          },
          text: {
            primary: '#d6deeb',
            secondary: '#5f7e97',
          },
          action: {
            active: '#13344f',
            hover: '#697098',
          },
          primary: {
            main: '#084d81',
            light: '#5f7e9790',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#7e57c2',
          },
          error: {
            main: '#01111d',
          },
          warning: {
            main: '#0e293f',
          },
        }),
  },
  breakpoints: {
    values: BreakPoints,
  },
  typography: {
    h3: {
      fontFamily: "Spectral, serif",
      fontWeight: 600,
      fontSize: '42px',
    },
    body1: {
      fontFamily: "Rubik, sans-serif",
      fontWeight: 400,
      fontSize: '20px',
    },
    button: {
      textTransform: 'none',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
    }
  },
});
