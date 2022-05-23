import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Invitation } from "../components/invitation";
import { Jumbotron } from "../components/jumbotron";
import { Timer } from "../components/timer";
import { Footer } from "../components/footer";
import { Gifts } from "../components/gifts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zyanya & Jesus - Nuestra Boda</title>
      </Head>
      <div className={styles.app}>
        <Jumbotron />
        <Invitation />
        <Timer />
        <Gifts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
