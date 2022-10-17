import { Button as ChakraButton, ButtonProps, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

interface JMButtonProps extends ButtonProps {
  children: ReactNode;
}
export function Button({ children, ...rest }: JMButtonProps) {
  return (
    <ChakraButton rounded="lg" size="md" {...rest}>
      <Text fontSize={["xl", "md"]}>{children}</Text>
    </ChakraButton>
  );
}
