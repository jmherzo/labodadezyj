import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import styles from "./intro.module.scss";

export function Intro() {
  return (
    <Flex className={styles.container}>
      <Box className={styles.introImage}>
        <NextImage
          src="/delamano.png"
          alt="de la mano"
          width="300px"
          height="300px"
          className={styles.img}
        />
      </Box>
      <Box>
        <Text maxWidth="lg" fontSize="xl" className={styles.introText}>
          Gracias por formar parte del día más importante de nuestra vidas y por
          acompañarnos en este momento tan maravilloso.
        </Text>
        <br />
        <Text
          fontSize="xl"
          className={styles.signature}
          fontWeight="bold"
        >{`- Z&J`}</Text>
      </Box>
    </Flex>
  );
}
