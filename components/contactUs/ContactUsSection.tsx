import { pages } from "@/utils/pages";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { Button } from "../custom/button";
import styles from "./contactUsSection.module.scss";

export function ContactUsSection() {
  const router = useRouter();
  function handleClick(e?: MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    router.push(`/${pages.contactUs}`);
  }
  return (
    <Box className={styles.container} bg="tusk">
      <VStack spacing={3} align="stretch" color="black" p={7}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Escríbele un mensaje a los novios
        </Text>
        <Button colorScheme="greenCta" onClick={handleClick}>
          Enviar un mensaje
        </Button>
      </VStack>
    </Box>
  );
}
