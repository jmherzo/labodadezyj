import { Emoji } from "../custom/Emoji";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {"© 2022 | labodadezyj.com"}
      <Emoji symbol="🇲🇽" label="Mexico Flag" />
    </footer>
  );
}

export { Footer };
