import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./gifts.module.css";
function Gifts() {
  return (
    <Box className={styles.container}>
      <Box className={styles.card}>
        <Text fontSize="2xl" className={styles.coming}>
          Próximamente...
        </Text>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://icons8.com/icon/dsNzsINVrrY1/tow-truck"
        >
          <Image
            src="/tow-truck.gif"
            alt="Tow Truck"
            width="128"
            height="128"
          />
        </a>{" "}
        <Text fontSize="3xl" className={styles.title}>
          Regalos y otras recomendaciones
        </Text>
      </Box>
    </Box>
  );
}

export { Gifts };
