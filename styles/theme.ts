import {
  Palette,
  PaletteMode,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#a4c4f4",
          },

          secondary: {
            main: "#1b0603",
          },

          accent: "#d1881a",

          background: {
            //  default: "#042124" 
             default: "#AFAFAF" 
            },

          text: {
            primary : "#edfbfd"
          },
        }
      : {
          primary: {
            main: "#2f4c6a",
          },

          secondary: {
            main: "#cacae8",
          },

          accent: "#4746a0",

          background: { default: "#fbfdfd" },

          text: {
            primary : "#091515"
          },
        }),
  },
  breakpoints: {
    values: {
      mobile: 400,
      tablet: 600,
      laptop: 1000,
      desktop: 1200,
    },
  },
});
