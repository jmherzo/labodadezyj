import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import styles from "./gifts.module.css";

const data = {
  imageURL:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  name: "Spa en la playa",
};

function Gifts() {
  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <Text fontSize="2xl" className={styles.title}>
          Regalos
        </Text>
      </Box>
      <Box maxWidth="md" textAlign="justify">
        {`Nuestro hogar está casi completo, es por eso que no
        tenemos una mesa de regalos en una tienda. En esta sección
        podrás regalarnos experiencias para disfrutar en nuestra luna de miel.`}
        <br />
        Maldivas 🛫 Abu Dhabi 🛬 Dubai
      </Box>
      <Box className={styles.cardContainer}>
        <Box maxW="sm" borderWidth="1px" rounded="lg" shadow="lg">
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
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
              >
                {data.name}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignItems="center" p="1">
              $2000
              <Button size="md">Regalar</Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Gifts };
