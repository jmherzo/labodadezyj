import { Box, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { CardWithImage } from "../custom/cardWithImage";
import styles from "./gifts.module.scss";
import { Button } from "../custom/button";
import { PaymentModal } from "../custom/paymentModal";
import { giftsList } from "@/lib/giftsList";

function Gifts() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  /** Refactor Gifts map to be an array with objects + img path */
  return (
    <section ref={sectionRef} id="mesa-de-regalos">
      <PaymentModal isOpen={isOpen} onClose={onClose} />
      <Box className={styles.container}>
        <Box className={styles.titleContainer}>
          <Text fontSize="2xl" className={styles.title}>
            Mesa de Regalos
          </Text>
        </Box>
        <VStack
          maxWidth={["md", "lg"]}
          textAlign="justify"
          mb="1rem"
          justifyContent="center"
        >
          <Text fontSize="lg">
            Nuestro hogar está casi completo, es por eso que no tenemos una mesa
            de regalos en una tienda. En esta sección podrás regalarnos
            experiencias para disfrutar en nuestra luna de miel.
          </Text>
          <br />
          <Text fontSize="xl" fontWeight="medium">
            Nuestra luna de miel:
          </Text>
          <Text fontSize="lg">Maldivas 🏖️ Abu Dhabi 🏜️ Dubai</Text>
        </VStack>
        <Box className={styles.cardContainer}>
          <CardWithImage
            src="/spa-maldivas-min.webp"
            gift={giftsList.get("spa")}
            onClick={onOpen}
          />
          <CardWithImage
            src="/safari-desierto.png"
            gift={giftsList.get("safari")}
            onClick={onOpen}
          />
          <CardWithImage
            src={`/buceo-min.webp`}
            gift={giftsList.get("buceo")}
            onClick={onOpen}
          />
          <CardWithImage
            src="/paseo-catamaran.jpeg"
            gift={giftsList.get("catamaran")}
            onClick={onOpen}
          />
          <CardWithImage
            src="/romantic-dinner.png"
            gift={giftsList.get("cena")}
            onClick={onOpen}
          />
          <CardWithImage
            src="/sheraton-jet-ski-min.webp"
            gift={giftsList.get("picnic")}
            onClick={onOpen}
          />
        </Box>
        <VStack
          maxW="md"
          flexDir="column"
          pt="2rem"
          pb="1rem"
          align="stretch"
          spacing={4}
        >
          <Text fontSize="2xl" lineHeight="tight">
            Regálanos una cantidad diferente:
          </Text>
          <Button colorScheme="cta">Regalar</Button>
        </VStack>
      </Box>
    </section>
  );
}

export { Gifts };
