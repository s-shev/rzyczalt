import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    h1: {
      fontFamily: "Fraunces, serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
