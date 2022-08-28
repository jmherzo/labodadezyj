import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { CardWithImage } from "../custom/cardWithImage";
import styles from "./gifts.module.scss";

function Gifts() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/regalos") {
      console.log("asPath", router.asPath);
      if (sectionRef.current) {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [router.asPath]);

  return (
    <section ref={sectionRef} id="mesa-de-regalos">
      <Box className={styles.container}>
        <Box className={styles.titleContainer}>
          <Text fontSize="2xl" className={styles.title}>
            Mesa de Regalos
          </Text>
        </Box>
        <Box maxWidth="md" textAlign="justify">
          <Text fontSize="lg">
            Nuestro hogar está casi completo, es por eso que no tenemos una mesa
            de regalos en una tienda. En esta sección podrás regalarnos
            experiencias para disfrutar en nuestra luna de miel.
          </Text>
          <br />
          <Text fontSize="xl" textAlign="center" fontWeight="medium">
            Nuestra luna de miel:
            <br />
            Maldivas 🏖️ Abu Dhabi 🏜️ Dubai
          </Text>
        </Box>
        <Box className={styles.cardContainer}>
          <CardWithImage
            src="/spa-maldivas.png"
            altSrc="Imagen de Spa en la playa"
            title="Spa a la orilla de la playa"
            price={2000}
            cta="Regalar"
          />
          <CardWithImage
            src="/safari-desierto.png"
            altSrc="Imagen de Tour en el desierto"
            title="Safari en el desierto"
            price={1200}
            cta="Regalar"
          />
          <CardWithImage
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            altSrc="Imagen de Buceo en el océano"
            title="Buceo en las Maldivas"
            price={1500}
            cta="Regalar"
          />
          <CardWithImage
            src="/romantic-dinner.png"
            altSrc="Imagen de cena romántica"
            title="Cena Romántica"
            price={1000}
            cta="Regalar"
          />
        </Box>
        {/* <a
          data-pin-do="embedBoard"
          data-pin-board-width="400"
          data-pin-scale-height="240"
          data-pin-scale-width="80"
          href="https://www.pinterest.com.mx/zyzya/vestidos-hacienda"
        ></a>
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script> */}
      </Box>
    </section>
  );
}

export { Gifts };
