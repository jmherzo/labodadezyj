import type { NextPage } from "next";
import Head from "next/head";
import { Invitation } from "../components/invitation";
import { Jumbotron } from "../components/jumbotron";
import { Timer } from "../components/timer";
import { Footer } from "../components/footer";
import { UnderConstruction } from "../components/underConstruction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zyanya & Jesus - Nuestra Boda</title>
      </Head>
      <Jumbotron />
      <Invitation />
      <Timer />
      <UnderConstruction />
      <Footer />
    </>
  );
};

export default Home;
