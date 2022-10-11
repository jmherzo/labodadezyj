import { Button as ChakraButton, ButtonProps, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type JMButtonProps = {
  children: ReactNode;
  onClick(): void;
};
export function Button({ children, ...rest }: JMButtonProps | ButtonProps) {
  return (
    <ChakraButton rounded="lg" size="md" {...rest}>
      <Text fontSize={["xl", "md"]}>{children}</Text>
    </ChakraButton>
  );
}
