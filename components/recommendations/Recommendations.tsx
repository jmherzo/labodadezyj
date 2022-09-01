import {
  Box,
  Button,
  Divider,
  Flex,
  Highlight,
  Input,
  Link,
  SimpleGrid,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { Recommendation } from "../custom/recommendation";
import styles from "./recommendations.module.scss";

export function Recommendations() {
  const hotelCode = "G1JYNN@GME";
  const { hasCopied, onCopy } = useClipboard(hotelCode);
  return (
    <Box className={styles.container}>
      <Box padding="1rem" bg="#f5f6f3">
        <Divider />
      </Box>
      <Box className={styles.titleContainer}>
        <Text fontSize="2xl" className={styles.title}>
          Recomendaciones
        </Text>
      </Box>
      <Box className={styles.bodyContainer}>
        <Box py={6} px={10}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={12}
            justifyContent="flex-start"
          >
            <Recommendation
              imageSrc={"/gamma-castellano-min.webp"}
              imageAlt="Imagen de Hotel Gamma Merida El castellano"
              title={"Hotel Gamma Mérida El Castellano"}
              content={
                <Box py={2}>
                  <Text
                    fontSize="lg"
                    color={"gray.600"}
                    textAlign="justify"
                    maxWidth="sm"
                  >
                    <Highlight
                      query="hotel sede de la boda"
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "blue.100",
                      }}
                    >
                      Este será el hotel sede de la boda y te fascinará ya que
                      está ubicado a escasos pasos de la catedral y del cuadro
                      principal de la ciudad, cercano al Paseo de Montejo.
                    </Highlight>
                  </Text>
                </Box>
              }
              bottom={
                <Flex flexDir="column" pb="4" pt={2}>
                  <Text textAlign="start">Código de tarifa especial:</Text>
                  <Flex py={3}>
                    <Input
                      mr={1}
                      variant="filled"
                      value={hotelCode}
                      isReadOnly
                      placeholder={hotelCode}
                    />
                    <Button onClick={onCopy}>
                      {hasCopied ? "Copiado" : "Copiar"}
                    </Button>
                  </Flex>
                  <Box px={6} pt={4}>
                    <Link
                      color="teal.500"
                      isExternal
                      href="/files/GAMMA-CASTELLANO-BLOQUEO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Text fontWeight="bold" fontSize="lg">
                        Conoce las tarifas preferentes aquí
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              }
            />
            <Recommendation
              imageSrc={"/vans.png"}
              imageAlt="Imange de Vans para transporte"
              title={"Transporte en Vans"}
              content={
                <Text
                  fontSize="lg"
                  color={"gray.600"}
                  textAlign="justify"
                  maxWidth="sm"
                >
                  Las vans saldrán y regresarán al hotel sede de la boda.
                </Text>
              }
              bottom={
                <Flex flexDirection="column">
                  <Text
                    fontSize="lg"
                    color={"gray.600"}
                    fontWeight="bold"
                    py={4}
                  >
                    Horarios
                  </Text>
                  <StatGroup flexDir="column" alignItems="center">
                    <Stat py={2}>
                      <StatLabel fontSize="md">Salida del hotel</StatLabel>
                      <StatNumber>12:00PM</StatNumber>
                      <StatLabel fontSize="md">
                        Salida de la iglesia a la hacienda
                      </StatLabel>
                      <StatNumber>2:00PM</StatNumber>
                    </Stat>
                    <Divider />
                    <Stat py={2}>
                      <StatLabel fontSize="md">Regreso al hotel</StatLabel>
                      <StatNumber py={1}>8:00PM</StatNumber>
                      <StatNumber py={1}>10:00PM</StatNumber>
                      <StatLabel fontSize="md">{`(última Van de regreso al hotel)`}</StatLabel>
                      <StatNumber py={1}>12:00AM</StatNumber>
                    </Stat>
                  </StatGroup>
                </Flex>
              }
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
