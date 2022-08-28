import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function Button({ children, onClick }: ButtonProps) {
  return (
    <ChakraButton
      onClick={onClick}
      rounded="lg"
      size="md"
      className={styles.button}
    >
      <Text fontSize="lg">{children}</Text>
    </ChakraButton>
  );
}
