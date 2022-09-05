import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: string;
  variant?: string;
};
export function Button({
  children,
  onClick,
  colorScheme = "cta",
  variant,
}: ButtonProps) {
  return (
    <ChakraButton
      onClick={onClick}
      rounded="lg"
      size="md"
      colorScheme={colorScheme}
      variant={variant}
    >
      <Text fontSize="xl">{children}</Text>
    </ChakraButton>
  );
}
