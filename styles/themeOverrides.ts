import "@mui/material";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
      xs: false;
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true;
      tablet: true;
      laptop: true;
      desktop: true;
    }
    interface Palette {
      light: Palette["primary"];
      dark: Palette["secondary"];
    }
    interface PaletteOptions {
      light?: PaletteOptions["primary"];
      dark?: PaletteOptions["secondary"];
    }
    interface PaletteColor {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    }
    interface PaletteColorOptions {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    }
  }