import { Box, Divider, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Recommendation } from "../custom/recommendation";
import styles from "./recommendations.module.scss";

export function Recommendations() {
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
        <Box py={8} px={12}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            justifyContent="flex-start"
          >
            <Recommendation
              imageSrc={"/gamma-castellano-min.webp"}
              imageAlt="Imagen de Hotel Gamma Merida El castellano"
              title={"Hotel Gamma Mérida El Castellano"}
              text={
                "Hotel sede de la boda. El hotel Gamma Mérida El castellano te fascinará ya que está ubicado a escasos pasos de La Catedral y del cuadro principal de la ciudad, cercano al Paseo de Montejo"
              }
              bottom={
                <Link color="teal.500" href="https://pin.it/7Hgt3D8" isExternal>
                  <a
                    href="/files/GAMMA-CASTELLANO-BLOQUEO.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text fontWeight="bold" fontSize="lg">
                      Conoce las tarifas preferentes aquí
                    </Text>
                  </a>
                </Link>
              }
            />
            <Recommendation
              imageSrc={"/vans.png"}
              imageAlt="Imange de Vans para transporte"
              title={"Horario de Vans"}
              text={
                "Las vans saldrán y regresarán al hotel sede el cual será el Hotel Gamma Mérida El Castellano. El horario de salida del hotel será a la 1pm y el horario de regreso al hotel será... "
              }
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
