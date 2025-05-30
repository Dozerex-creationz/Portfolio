import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      primary: {
        [key: number]: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        glass: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
      };
      border: {
        light: string;
        medium: string;
        dark: string;
      };
      gradients: {
        primary: string;
        subtle: string;
        glow: string;
        glass: string;
      };
      patterns: {
        leaves: string;
        vines: string;
      };
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    blur: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
