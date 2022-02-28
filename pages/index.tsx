import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Location } from "../components/location/Location";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Emoji } from "../components/custom/Emoji";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La boda de Zyanya y Jesus</title>
      </Head>
      <div className={styles.app}>
        <Jumbotron />
        <Location />
        <footer className={styles.footer}>
          {"Hecho con"} <Emoji symbol="❤️" label="heart" /> {"por J&Z"}
        </footer>
      </div>
    </>
  );
};

export default Home;
