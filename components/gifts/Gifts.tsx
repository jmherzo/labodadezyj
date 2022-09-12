import { Box, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { CardWithImage } from "../custom/cardWithImage";
import styles from "./gifts.module.scss";
import { Button } from "../custom/button";
import { PaymentModal } from "../custom/paymentModal";
import { giftsList } from "@/lib/giftsList";
import { initialGift, useGlobalContext } from "@/utils/GlobalContext";

function Gifts() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { setGift } = useGlobalContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (router.asPath === "/regalos") {
      if (sectionRef.current) {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [router.asPath]);

  const handleNoAmount = useCallback(() => {
    setGift(initialGift);
    onOpen();
  }, [setGift, onOpen]);

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
          {giftsList.map((gift) => (
            <CardWithImage key={gift.id} gift={gift} onClick={onOpen} />
          ))}
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
          <Button
            onClick={handleNoAmount}
            colorScheme="cta"
            variant={["solid", "outline"]}
          >
            Regalar
          </Button>
        </VStack>
      </Box>
    </section>
  );
}

export { Gifts };
