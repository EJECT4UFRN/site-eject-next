import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      blue100: string;
      blue200: string;
      blue300: string;

      white: string;
      black: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
    };
  }
}
