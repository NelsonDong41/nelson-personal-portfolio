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
          primary: {
            main: "#89d920",
          },

          secondary: {
            main: "#070a31",
          },

          accent: "#7626df",

          background: { default: "rgb(15, 23, 42)" },

          text: {
            primary: "#fcfbed",
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
  },
});
