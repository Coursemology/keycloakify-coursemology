import { FC, ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface ThemeProvidersProps {
  children: ReactNode;
}

const theme = extendTheme({
  colors: {
    primary: {
      500: "#00BCD4",
    },
    text: {
      primary: "#12161B",
      secondary: "#66788A",
      disabled: "#A6B1BB",
      white: "#FFFFFF",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

const ThemeProvider: FC<ThemeProvidersProps> = (props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};

export default ThemeProvider;
