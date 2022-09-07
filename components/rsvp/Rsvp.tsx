import { Box, Button, Divider, Text, VStack } from "@chakra-ui/react";
import styles from "./rsvp.module.scss";
export function Rsvp() {
  return (
    <>
      <Box px="2rem" bg="mainWhite">
        <Divider />
      </Box>
      <VStack px="2rem" py="2rem" bg="mainWhite" minH="260px">
        <Box className={styles.titleContainer}>
          <Text fontSize="2xl" className={styles.title}>
            RSVP
          </Text>
        </Box>
        <Text fontSize="lg" py={4} alignSelf="center">
          Confirma tu asistencia, enviando un whatsapp a nuestro wedding
          planner.
        </Text>
        <Button
          colorScheme="green"
          size="lg"
          onClick={() => {
            window.open("https://wa.me/+529999940084");
          }}
        >
          Enviar un WhatsApp
        </Button>
      </VStack>
    </>
  );
}
