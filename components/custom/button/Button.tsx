import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  colorScheme?: string;
};
export function Button({
  children,
  colorScheme = "cta",
  ...rest
}: ButtonProps) {
  return (
    <ChakraButton rounded="lg" size="md" colorScheme={colorScheme} {...rest}>
      <Text fontSize="xl">{children}</Text>
    </ChakraButton>
  );
}
