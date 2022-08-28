import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./cardWithImage.module.scss";

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
      <Box p="6">
        <Flex
          mt="1"
          justifyContent="center"
          alignContent="center"
          fontWeight="bold"
        >
          <Box fontSize="xl" as="h4" lineHeight="tight" p="0.5rem">
            <Text>{title}</Text>
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="baseline" p="0.5rem">
          <Text fontSize="2xl">{`$${price} `}</Text>{" "}
          <Text fontSize="md">{` MXN`}</Text>
        </Flex>
        <Flex pt="0.5rem">
          <Button rounded="xl" flex="auto" size="lg" className={styles.button}>
            <Text fontSize="xl">{cta}</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export { CardWithImage };
