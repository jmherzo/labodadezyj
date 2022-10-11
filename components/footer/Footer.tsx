import { Text } from "@chakra-ui/react";
import { Emoji } from "../emoji";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Text fontSize="sm">{`© 2022 labodadezyj.com`}</Text>
      <Emoji symbol="🇲🇽" label="Mexico Flag" />
    </footer>
  );
}
