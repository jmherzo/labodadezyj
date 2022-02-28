import { Box, Text } from "@chakra-ui/react";
import { Emoji } from "../custom/Emoji";
import styles from "./location.module.css";

export function Location() {
  return (
    <Box className={styles.container}>
      <Text fontSize="4xl" align="center" className={styles.title}>
        <Emoji label="location" symbol="📍" />
        Hacienda Yaxcopoil
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1465666573085!2d-89.72431308460041!3d20.744852702784453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5615112b3c1385%3A0x582d0053db4865e6!2sHacienda%20Yaxcopoil!5e0!3m2!1sen!2smx!4v1646021695399!5m2!1sen!2smx"
        width="80%"
        height="450"
        className={styles.map}
        allowFullScreen
        loading="lazy"
      />
    </Box>
  );
}
