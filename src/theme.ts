import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#0C7C6A",
      dark: "#085E51",
      light: "#3AAE96",
    },
    secondary: {
      main: "#F2A900",
    },
    background: {
      default: "#F6F2EA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#13231E",
      secondary: "#4B5F58",
    },
  },
  typography: {
    fontFamily: "Space Grotesk, system-ui, sans-serif",
    fontSize: 14,
    h1: {
      fontFamily: "Fraunces, serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "2.1rem",
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3.6rem",
      },
    },
    h2: {
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "1.75rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "0.95rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.85rem",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle1: {
      fontSize: "0.95rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.05rem",
      },
    },
    subtitle2: {
      fontSize: "0.85rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.85rem",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  shape: {
    borderRadius: 18,
  },
  spacing: 8,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          "@media (max-width:599px)": {
            borderRadius: "14px",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:599px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          height: "26px",
          "@media (min-width:600px)": {
            fontSize: "0.8125rem",
            height: "32px",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          padding: "6px 12px",
          "@media (min-width:600px)": {
            fontSize: "0.875rem",
            padding: "8px 16px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
        },
      },
    },
  },
});

export default theme;
