import jumbotronLouvre from "../../public/jumbotronLouvre.jpg";
import Image from "next/image";
import styles from "./jumbotron.module.scss";
import { Flex } from "@chakra-ui/react";

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
      <Flex flexDirection="column" className={styles.content}>
        <div className={styles.topContent}>
          <h2 className={styles.description}>La boda de</h2>
          <h1 className={styles.title}>{`Zyanya Andrea`}</h1>
          <h1 className={styles.title}>{`&`}</h1>
          <h1 className={styles.title}>{`Jesús Manuel`}</h1>
        </div>
        <div className={styles.bottomContent}>
          <h3 className={styles.description}> Aparta la fecha </h3>
          <h3 className={styles.weddingDate}>05 - Nov - 2022</h3>
        </div>
      </Flex>
    </main>
  );
}
