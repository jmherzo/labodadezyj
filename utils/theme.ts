import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `Satisfy, cursive`,
    body: "Lato",
  },
});

export { theme };
