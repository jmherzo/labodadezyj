import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./cardWithImage.module.scss";
import { Button } from "../button";
import React from "react";
import { Gift } from "@/lib/types";
import { useGlobalContext } from "@/utils/GlobalContext";

type CardWithImageProps = {
  gift: Gift | undefined;
  callToAction?: string;
  onClick(): void;
};

function CardWithImage({
  gift,
  callToAction = "Regalar",
  onClick,
}: CardWithImageProps) {
  const { setGift } = useGlobalContext();
  function handleOnClik() {
    if (gift) {
      setGift(gift);
    }
    onClick();
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
        src={gift?.imageSrc}
        alt={`Imagen de ${gift?.description}`}
        fit="cover"
        roundedTop="lg"
      />
      <Flex flexDir="column" p="1rem">
        <Box p="0.5rem">
          <Text fontSize="2xl" lineHeight="tight" className={styles.title}>
            {gift?.description}
          </Text>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="baseline"
          p="0.5rem"
          pb="1rem"
          fontWeight="bold"
        >
          <Text fontSize="2xl" pr="0.25rem">{`$${gift?.price}`}</Text>
          <Text fontSize="md">{`MXN`}</Text>
        </Flex>
        <Button onClick={handleOnClik} colorScheme="cta">
          {callToAction}
        </Button>
      </Flex>
    </Box>
  );
}

export { CardWithImage };
