import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Public Sans",
  },
  palette: {
    primary: {
      main: "#5041AB",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#CC314D",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
