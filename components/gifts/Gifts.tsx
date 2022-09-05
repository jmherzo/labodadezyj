import {
  Box,
  Divider,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { CardWithImage } from "../custom/cardWithImage";
import styles from "./gifts.module.scss";
import { Button } from "../custom/button";
import { PaymentModal } from "../custom/paymentModal";
import { useGlobalContext } from "@/utils/GlobalContext";

function Gifts() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setPrice } = useGlobalContext();
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

  function handleClick() {
    setPrice(0);
    onOpen();
  }

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
            altSrc="Imagen de Spa en la playa"
            title="Spa a la orilla de la playa"
            price={2000}
            cta="Regalar"
            onClick={onOpen}
          />
          <CardWithImage
            src="/safari-desierto.png"
            altSrc="Imagen de Tour en el desierto"
            title="Safari en el desierto"
            price={1500}
            cta="Regalar"
            onClick={onOpen}
          />
          <CardWithImage
            src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
            altSrc="Imagen de Buceo en el océano"
            title="Buceo en las Maldivas"
            price={2800}
            cta="Regalar"
            onClick={onOpen}
          />
          <CardWithImage
            src="/paseo-catamaran.jpeg"
            altSrc="Imagen de Paseo en catamaran"
            title="Paseo en catamaran"
            price={1750}
            cta="Regalar"
            onClick={onOpen}
          />
          <CardWithImage
            src="/romantic-dinner.png"
            altSrc="Imagen de cena en el desierto"
            title="Cena en el desierto"
            price={2500}
            cta="Regalar"
            onClick={onOpen}
          />
          <CardWithImage
            src="/sheraton-jet-ski-min.webp"
            altSrc="Imagen de picnic en una isla"
            title="Picnic en una isla"
            price={1200}
            cta="Regalar"
            onClick={onOpen}
          />
        </Box>
        <Divider />
        <Flex maxW="md" flexDir="column">
          <Text fontWeight="bold" fontSize="xl" py="3">
            Regálanos una cantidad diferente:
          </Text>
          <Button colorScheme="cta" variant="outline" onClick={handleClick}>
            Regalar
          </Button>
        </Flex>
      </Box>
    </section>
  );
}

export { Gifts };
