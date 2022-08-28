import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./cardWithImage.module.scss";
import { Button } from "../button";

type CardWithImageProps = {
  src: string;
  altSrc: string;
  title: string;
  price: number;
  cta: string;
};

function CardWithImage({ src, altSrc, title, price, cta }: CardWithImageProps) {
  return (
    <Box
      maxW="sm"
      w={{ sm: "350px" }}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      className={styles.card}
    >
      <Image
        h={{ sm: "200px", md: "300px" }}
        w={{ sm: "350px" }}
        src={src}
        alt={altSrc}
        fit="cover"
        roundedTop="lg"
      />
      <Flex flexDir="column" p="1rem">
        <Box p="0.5rem">
          <Text fontSize="2xl" lineHeight="tight" className={styles.title}>
            {title}
          </Text>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="baseline"
          p="0.5rem"
          pb="1rem"
          fontWeight="bold"
        >
          <Text fontSize="2xl">{`$${price} `}</Text>{" "}
          <Text fontSize="md">{` MXN`}</Text>
        </Flex>
        <Button>{cta}</Button>
      </Flex>
    </Box>
  );
}

export { CardWithImage };
