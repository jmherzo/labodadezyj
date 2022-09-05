import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    cta: {
      "50": "#FFF6E6",
      "100": "#FFE6B8",
      "200": "#FED68A",
      "300": "#FEC65D",
      "400": "#FEB62F",
      "500": "#FEA601",
      "600": "#CB8501",
      "700": "#986401",
      "800": "#664200",
      "900": "#332100",
    },
    greenCta: {
      "50": "#F4F8ED",
      "100": "#DFEACC",
      "200": "#CBDDAC",
      "300": "#B6D08B",
      "400": "#A2C26B",
      "500": "#8DB54A",
      "600": "#71913B",
      "700": "#556D2C",
      "800": "#39481E",
      "900": "#1C240F",
    },
    mainWhite: "#f5f6f3",
    prussianBlue: "#002F59",
    tusk: "#EFF3C4",
    harvestGold: "#DC9001",
    roseWhite: "#FBECE8",
    darkOlive: "#566E2D",
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
