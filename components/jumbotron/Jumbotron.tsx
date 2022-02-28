import jumbotronLouvre from "../../public/jumbotronLouvre.jpg";
import Image from "next/image";
import styles from "./jumbotron.module.css";

export function Jumbotron() {
  return (
    <main className={styles.main}>
      <Image
        src={jumbotronLouvre}
        alt="Portada con Jesus y Zyanya"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Zyanya & Jesús</h1>
        <h3 className={styles.description}>05 - Nov - 2022</h3>
      </div>
    </main>
  );
}
