import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      light: string;
      dark: string;
    };

    typography: {
      main: string;
      secondary: string;
    };
  }
}
