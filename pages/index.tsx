import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jumbotronLouvre from "../public/jumbotronLouvre.jpg";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La boda de Zyanya y Jesus</title>
      </Head>
      <div>
        <Image
          src={jumbotronLouvre}
          alt="Portada con Jesus y Zyanya"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
        <main className={styles.main}>
          <h1 className={styles.title}>Zyanya & Jesús</h1>
          <h3 className={styles.description}>05 - Nov - 2022</h3>
        </main>
        <footer className={styles.footer}> Hecho con ❤️ por J&Z</footer>
      </div>
    </>
  );
};

export default Home;
