import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      light: string;
      dark: string;
      modify: string;
      delete: string;
    };

    typography: {
      main: string;
      secondary: string;
      tertiary: string;
    };
  }
}
