import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./cardWithImage.module.scss";
import { Button } from "../button";
import React from "react";
import { useGlobalContext } from "@/utils/GlobalContext";

type CardWithImageProps = {
  src: string;
  altSrc: string;
  title: string;
  price: number;
  cta: string;
  onClick(): void;
};

function CardWithImage({
  src,
  altSrc,
  title,
  price,
  cta,
  onClick,
}: CardWithImageProps) {
  const { setPrice } = useGlobalContext();
  function handleOnClik() {
    onClick();
    setPrice(Number(price));
  }
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
          <Text fontSize="2xl" pr="0.25rem">{`$${price}`}</Text>
          <Text fontSize="md">{`MXN`}</Text>
        </Flex>
        <Button onClick={handleOnClik}>{cta}</Button>
      </Flex>
    </Box>
  );
}

export { CardWithImage };
