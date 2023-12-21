import { PaletteMode, ThemeOptions } from "@mui/material";
import { BreakPoints } from "./breakpoints";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#dbc0aa",
            paper: "#e2cec4",
          },
          text: {
            primary: "#59442f",
            secondary: "#816258",
          },
          action: {
            active: "#ecccbd",
            hover: "#d7b6a6",
          },
          primary: {
            main: "#b98e6d",
            light: "#d2a587",
            contrastText: "#3d2c25",
          },
          secondary: {
            main: "#916b51",
          },
          error: {
            main: "#9d4a3b",
          },
          warning: {
            main: "#ab6304",
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
