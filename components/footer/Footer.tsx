import { Emoji } from "../emoji";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {"© 2022 | labodadezyj.com"}
      <Emoji symbol="🇲🇽" label="Mexico Flag" />
    </footer>
  );
}
