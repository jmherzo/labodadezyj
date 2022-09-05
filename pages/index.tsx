import type { NextPage } from "next";
import Head from "next/head";
import { Invitation } from "../components/invitation";
import { Jumbotron } from "../components/jumbotron";
import { Timer } from "../components/timer";
import { Footer } from "../components/footer";
import { Gifts } from "../components/gifts";
import { Intro } from "../components/intro";
import { Recommendations } from "../components/recommendations";
import { ContactUsSection } from "@/components/contactUs";
import { Rsvp } from "@/components/rsvp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Zyanya Andrea & Jesus Manuel - Nuestra Boda`}</title>
      </Head>
      <Jumbotron />
      <Invitation />
      <Intro />
      <Timer />
      <Gifts />
      <ContactUsSection />
      <Recommendations />
      <Rsvp />
      <Footer />
    </>
  );
};

export default Home;
