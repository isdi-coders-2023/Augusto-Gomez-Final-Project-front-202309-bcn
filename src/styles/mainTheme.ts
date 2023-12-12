import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "@fontsource/inria-sans";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#edf5f4",
    formBackground: "#dCe8e7",
    light: "#fff",
    dark: "#000",
    modify: "#00b7de",
    delete: "#ff6565",
    buttonBackground: "#f5f5f5",
  },
  typography: {
    main: "'Outfit Variable', sans-serif",
    secondary: "'Inter Variable', sans-serif",
    tertiary: "'Inria Sans', sans-serif",
  },
};

export default mainTheme;
