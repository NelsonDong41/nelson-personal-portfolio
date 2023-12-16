import { PaletteMode, ThemeOptions } from "@mui/material";
import { BreakPoints } from "./breakpoints";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#e0e0e0",
            paper: "#c0c0c0",
          },
          text: {
            primary: "#000000",
            secondary: "#6a7a87",
          },
          action: {
            active: "#4187c2",
            hover: "#71a0c9",
          },
          primary: {
            main: "#3f51b5",
            light: "#6573c3",
            contrastText: "#fff",
          },
          secondary: {
            main: "#ff4081",
            dark: "#d81b60",
          },
          error: {
            main: "#e57373",
          },
          warning: {
            main: "#ffb74d",
          },
          info: {
            main: "#64b5f6",
          },
        }
      : {
          background: {
            default: "#011627",
            paper: "#0b253a",
          },
          text: {
            primary: "#d6deeb",
            secondary: "#5f7e97",
          },
          action: {
            active: "#13344f",
            hover: "#697098",
          },
          primary: {
            main: "#084d81",
            light: "#5f7e9790",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#7e57c2",
          },
          error: {
            main: "#AA0000",
          },
          warning: {
            main: "#0e293f",
          },
        }),
  },
  breakpoints: {
    values: BreakPoints,
  },
  typography: {
    h1: {
      fontFamily: "Spectral, serif",
      fontWeight: 800,
      fontSize: "50px",
    },
    h3: {
      fontFamily: "Spectral, serif",
      fontWeight: 800,
      fontSize: "22px",
    },
    h5: {
      fontFamily: "Spectral, serif",
      fontWeight: 800,
      fontSize: "20px",
    },
    h6: {
      fontFamily: "Spectral",
      fontWeight: 800,
      fontSize: "18px",
    },
    body1: {
      fontFamily: "Rubik, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
    },
    body2: {
      fontFamily: "Rubik, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
    },
    button: {
      textTransform: "none",
      fontFamily: "inherit",
      fontSize: "inherit",
      margin: 0,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: "green",
          color: "white",
        },
        standardError: {
          backgroundColor: "red",
          color: "white",
        },
        standardWarning: {
          backgroundColor: "orange",
          color: "white",
        },
        standardInfo: {
          backgroundColor: "#084d81",
          color: "white",
        },
      },
    },
  },
});
