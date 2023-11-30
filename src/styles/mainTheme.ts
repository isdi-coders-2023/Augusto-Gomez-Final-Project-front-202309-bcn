import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "@fontsource/inria-sans";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#EDF5F4",
    light: "#fff",
    dark: "#000",
    modify: "#37b42d",
    delete: "#ff6565",
  },
  typography: {
    main: "'Outfit Variable', sans-serif",
    secondary: "'Inter Variable', sans-serif",
    tertiary: "'Inria Sans', sans-serif",
  },
};

export default mainTheme;
