import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function Button({ children, onClick }: ButtonProps) {
  return (
    <ChakraButton onClick={onClick} rounded="lg" size="md" colorScheme="cta">
      <Text fontSize="lg">{children}</Text>
    </ChakraButton>
  );
}
