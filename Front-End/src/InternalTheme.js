// A custom theme for this app
import { createMuiTheme } from "@material-ui/core/styles";

const Theme = {
  typography: {
    fontFamily: '"Reach-Text-Regular", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(223, 223, 223, 1)",
      main: "rgba(0, 48, 88, 1)",
      dark: "rgba(0, 48, 88, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(0, 153, 216, 1)",
      main: "rgba(0, 98, 155, 1)",
      dark: "rgba(0, 98, 155, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    grey: {
      light: "#cccccc",
      main: "#d8d8d8",
      dark: "#757575",
      slate: "#63738A",
      ash: "#f8f8f8",
    },
    blue: {
      main: "#003057",
      medium: "#00629b",
      light: "#0099d8",
      lighter: "#34c0e8",
      dark: "#001b33",
      darkest: "#001b33e6",
    },
    white: {
      alto: "#cecece",
      smoke: "#f5f5f5",
    },
  },
  overrides: {
    MuiTableHead: {
      root: {
        background: "#00629b",
      },
    },
    MuiTableCell: {
      head: {
        color: "white !important",
        fontWeight: 600,
        lineHeight: "2.5rem",
      },
      root: {
        padding: "4px",
      },
    },
    MuiTableSortLabel: {
      active: {
        color: "white !important",
      },
      icon: {
        color: "white !important",
      },
      root: {
        color: "white !important",
      },
    },
    MuiFormControl: {
      root: {
        margin: "0rem .5rem .75rem 0rem",
      },
    },
  },
};

const InternalTheme = createMuiTheme(Theme);

export default InternalTheme;
