import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";
// import theme from "./components/ThemeArahi";
import MyData from "./data/tokens.json";
import CSSVarTheme from "./components/LightAndDarkMode-CSSVarTheme";

import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Content from "./components/Content";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Bokeh from "./components/Bokeh";

const ColorSchemePicker = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

const theme = experimental_extendTheme({
  palette: {
    primary: {
      light: MyData.global.color.base.midblue.value,
      dark: MyData.global.color.base.blue.value,
      main: MyData.global.color.base.darkblue.value,
      // main: `var(--light-warning-main)`,
      contrastText: MyData.global.color.base.white.value,
    },
    secondary: {
      light: MyData.global.color.base.lightgrey.value,
      main: MyData.global.color.base.lightgrey.value,
      // main: --light-error-contrast,
      contrastText: MyData.global.color.base.blue.value,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 0,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.3,
  },

  typography: {
    fontFamily: [
      "Arial",
      "Roboto",
      '"Helvetica Neue"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "FSLola",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  typography: {
    poster: {
      color: "red",
    },
    // Disable h3 variant
    h3: {
      color: "red",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    // fontFamily: "FSLola, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FSLola';
          font-style: bold;
          font-display: swap;
          font-weight: 800;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 600,
      color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
  },
});

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function LightAndDarkMode() {
  // the `node` is used for attaching CSS variables to this demo, you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById("css-vars-custom-theme"));
  }, []);
  return (
    <div id="css-vars-custom-theme">
      <CssVarsProvider
        theme={theme}
        colorSchemeNode={node || null}
        colorSchemeSelector="#css-vars-custom-theme"
        colorSchemeStorageKey="custom-theme-color-scheme"
        modeStorageKey="custom-theme-mode"
      >
        <Grid container direction="column">
          <Header />
          <ColorSchemePicker />
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <CSSVarTheme />
              aaaaa
              {/* <Bokeh />
              <CSSVarTheme />
              <LightAndDarkMode />
              <CSSVariables /> */}
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </CssVarsProvider>
    </div>
  );
}
