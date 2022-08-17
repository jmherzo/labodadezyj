import { Box, Button, ButtonGroup, Link, Text } from "@chakra-ui/react";
import styles from "./invitation.module.scss";
import { atcb_action, atcb_init } from "add-to-calendar-button";
import { useEffect } from "react";
import { Emoji } from "../Custom";

export function Invitation() {
  useEffect(() => {
    atcb_init();
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    atcb_action({
      name: "Boda de Zyanya & Jesus",
      description:
        "Puedes entrar a nustra página web para ver más detalles del evento: https://labodadezyj.com/",
      startDate: "2022-11-05",
      endDate: "2022-11-06",
      startTime: "13:00",
      endTime: "01:00",
      location:
        "Hacienda Yaxcopoil: https://www.google.com/maps/place/Hacienda+Yaxcopoil/@20.744848,-89.722124,4315m/data=!3m1!1e3!4m5!3m4!1s0x0:0x582d0053db4865e6!8m2!3d20.7448477!4d-89.7221244?hl=es-MX&shorturl=1",
      options: ["Apple", "Google", "Outlook.com"],
      trigger: "click",
      timeZone: "America/Mexico_City",
      iCalFileName: "Boda de Zyanya & Jesus",
    });
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <Text fontSize="2xl" className={styles.title}>
          Invitación
        </Text>
      </Box>
      <Box className={styles.cardContainer}>
        <Box className={styles.card} shadow="lg">
          <Text fontSize="lg" className={styles.cardSubtitle}>
            Fecha y horario
          </Text>
          <Text fontSize="3xl" className={styles.cardTitle}>
            5 de Noviembre de 2022
          </Text>
          <Box className={styles.description}>
            <Text fontSize="lg">
              <Emoji symbol="⛪" label="Iglesia" />
              Misa a las 13:00hrs
            </Text>
            <Text fontSize="lg">
              <Emoji symbol="🎉" label="Hacienda" />
              Recepción a las 14:00hrs
            </Text>
          </Box>
          <Button size="md" onClick={onSubmit} className={styles.button}>
            Guardar en calendario
          </Button>
        </Box>
        <Box className={styles.card} shadow="lg">
          <Text fontSize="lg" className={styles.cardSubtitle}>
            Indicaciones
          </Text>
          <Text fontSize="3xl" className={styles.cardTitle}>
            Vestimenta formal
          </Text>
          <Box className={styles.description}>
            <Text fontSize="lg">
              <Emoji symbol="🧍" label="hombe" />
              {`Hombres: Guyabera Blanca`}
            </Text>
            <Text fontSize="lg">
              <Emoji symbol="👗" label="mujer" />
              Mujeres: Vestido largo
            </Text>
          </Box>
          <Text fontSize="3xl" className={styles.cardTitle}>
            <Emoji symbol="👫" label="pareja" />
            Sólo adultos
          </Text>
        </Box>
        <Box className={styles.card} shadow="lg">
          <Text fontSize="lg" className={styles.cardSubtitle}>
            Misa
          </Text>
          <Text fontSize="3xl" className={styles.cardTitle}>
            Iglesia Católica De Yaxcopoil
          </Text>
          <Text fontSize="lg" className={styles.description}>
            Ubicada a un costado de la Hacienda Yaxcopoil.
          </Text>
        </Box>
        <Box className={styles.card} shadow="lg">
          <Text fontSize="lg" className={styles.cardSubtitle}>
            Recepción
          </Text>
          <Text fontSize="3xl" className={styles.cardTitle}>
            Hacienda Yaxcopoil
          </Text>
          <Text fontSize="lg" className={styles.description}>
            Calle 21 Número 500. Yaxcopoil, Yucatán, C. P. 97396. Km. 220,
            Carretera Federal 261, Mérida-Uxmal
          </Text>
          <ButtonGroup spacing="3">
            <Button size="md" className={styles.button}>
              <Link href="https://goo.gl/maps/MLarKrS2r8sRNzzp7" isExternal>
                Google Maps
              </Link>
            </Button>
            <Button size="md" className={styles.button}>
              <Link
                href="https://ul.waze.com/ul?place=ChIJM1WdKBcVVo8R806uVYCRtHk&ll=20.74629420%2C-89.72273560&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                isExternal
              >
                Waze
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}
