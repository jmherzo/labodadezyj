import type { NextPage } from "next";
import Head from "next/head";
import { Invitation } from "../components/Invitation";
import { Jumbotron } from "../components/Jumbotron";
import { Timer } from "../components/Timer";
import { Footer } from "../components/footer";
import { UnderConstruction } from "../components/UnderConstruction";

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
