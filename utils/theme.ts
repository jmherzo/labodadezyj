import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    cta: {
      "50": "#FEF6E6",
      "100": "#FCE6BA",
      "200": "#FBD58E",
      "300": "#F9C562",
      "400": "#F7B536",
      "500": "#F5A40A",
      "600": "#C48408",
      "700": "#936306",
      "800": "#624204",
      "900": "#312102",
    },
    mainWhite: "#f5f6f3",
  },
  fonts: {
    heading: `Lato, cursive, ${baseTheme?.fonts.heading}`,
    body: `Lato, ${baseTheme?.fonts.body}`,
  },
  components: {
    Button: {
      variants: {
        "primary-btn": {
          rounded: "lg",
          size: "md",
          colorScheme: "cta",
          color: "white",
        },
      },
    },
  },
});

export { theme };
