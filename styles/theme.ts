import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    light: {
      primary: "#a4c4f4",

      secondary: "#1b0603",

      accent: "#d1881a",

      background: "#042124",

      text: "#edfbfd",
    },
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

theme = createTheme({
    palette: {
        mode: 'dark',
    },
})

theme = responsiveFontSizes(theme);

export default theme;
