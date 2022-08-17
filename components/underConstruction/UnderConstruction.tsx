import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./underConstruction.module.scss";

export function UnderConstruction() {
  return (
    <Box className={styles.container}>
      <Box className={styles.cardContainer}>
        <Box className={styles.card}>
          <Text fontSize="2xl" className={styles.coming}>
            Próximamente...
          </Text>
          <Flex justifyContent="center">
            <Image
              src="/tow-truck.gif"
              alt="Tow Truck"
              width="128"
              height="128"
            />
          </Flex>
          <Text fontSize="3xl" className={styles.title}>
            Regalos y otras recomendaciones
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
