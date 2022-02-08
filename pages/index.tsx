import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a la boda de Zyanya y Jesús
        </h1>
        <h3 className={styles.description}>Estamos en construcción...</h3>
      </main>
      <footer className={styles.footer}>Con amor por J & Z</footer>
    </div>
  );
};

export default Home;
