import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import styles from "./gifts.module.scss";

function Gifts() {
  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <Text fontSize="2xl" className={styles.title}>
          Mesa de Regalos
        </Text>
      </Box>
      <Box maxWidth="md" textAlign="justify">
        <Text fontSize="lg">
          Nuestro hogar está casi completo, es por eso que no tenemos una mesa
          de regalos en una tienda. En esta sección podrás regalarnos
          experiencias para disfrutar en nuestra luna de miel.
        </Text>
        <br />
        <Text fontSize="xl" textAlign="center" fontWeight="medium">
          Nuestra luna de miel:
          <br />
          Maldivas 🏖️ Abu Dhabi 🏜️ Dubai
        </Text>
      </Box>
      <Box className={styles.cardContainer}>
        {/** MOVE TO COMPONENT */}
        <Box maxW="sm" borderWidth="1px" rounded="lg" shadow="lg">
          <Image
            src="/spa-maldivas.png"
            alt={`Picture of Spa en la playa`}
            roundedTop="lg"
          />
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                p="0.5rem"
              >
                Spa a la orilla de la playa
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="1rem"
              fontSize="2xl"
            >
              $2000
              <Button size="md" className={styles.button}>
                Regalar
              </Button>
            </Flex>
          </Box>
        </Box>

        {/** MOVE TO COMPONENT */}
        <Box maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" mt="2rem">
          <Image
            src="/safari-desierto.png"
            alt={`Picture of Tour en el desierto`}
            roundedTop="lg"
          />
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                p="0.5rem"
              >
                Safari en el desierto
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="1rem"
              fontSize="2xl"
            >
              $1500
              <Button size="md" className={styles.button}>
                Regalar
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Gifts };
