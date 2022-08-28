import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./card.module.scss";

type CardProps = {
  subtitle: string;
  title: string;
  children: ReactNode;
  bottom?: ReactNode;
};

export function Card({ subtitle, title, children, bottom }: CardProps) {
  return (
    <Box className={styles.card} shadow="lg">
      <Text fontSize="xl" className={styles.cardSubtitle}>
        {subtitle}
      </Text>
      <Text fontSize="2xl" className={styles.cardTitle}>
        {title}
      </Text>
      <Flex flexDirection="column" justifyContent="space-between" flexGrow={1}>
        <Box className={styles.description}>{children}</Box>
        {bottom}
      </Flex>
    </Box>
  );
}
