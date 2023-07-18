import {
  Palette,
  PaletteMode,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) : ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {light : {
          primary: "#a4c4f4",

          secondary: "#1b0603",

          accent: "#d1881a",

          background: "#042124",

          text: "#edfbfd",
        }}
      : {
        dark : {
          primary: "#a4c4f4",

          secondary: "#1b0603",

          accent: "#d1881a",

          background: "#042124",

          text: "#edfbfd",
        }}),
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
