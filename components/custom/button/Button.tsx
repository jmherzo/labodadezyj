import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: string;
};
export function Button({
  children,
  onClick,
  colorScheme = "cta",
}: ButtonProps) {
  return (
    <ChakraButton
      onClick={onClick}
      rounded="lg"
      size="md"
      colorScheme={colorScheme}
    >
      <Text fontSize="lg">{children}</Text>
    </ChakraButton>
  );
}
