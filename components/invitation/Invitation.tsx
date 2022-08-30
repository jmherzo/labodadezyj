import { Box, ButtonGroup, Link, Stack, Text } from "@chakra-ui/react";
import styles from "./invitation.module.scss";
import { atcb_action, atcb_init } from "add-to-calendar-button";
import { useEffect } from "react";
import { Emoji } from "../emoji";
import { Card } from "../custom/card";
import { Button } from "../custom/button";

const labels = {
  fechaYHora: "Fecha y Horario",
  fecha: "5 de Noviembre de 2022",
  guardarEnCalendario: "Guardar en Calendario",
  indicaciones: "Indicaciones",
  vestimentaFormal: "Vestimenta Formal",
};

export function Invitation() {
  useEffect(() => {
    atcb_init();
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    atcb_action({
      name: "Boda de Zyanya Andrea & Jesús Manuel",
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
        <Card
          subtitle={labels.fechaYHora}
          title={labels.fecha}
          bottom={
            <Button onClick={onSubmit}>{labels.guardarEnCalendario}</Button>
          }
        >
          <Text fontSize="lg">
            <Emoji symbol="⛪" label="Iglesia" />
            Misa a las 13:00hrs
          </Text>
          <Text fontSize="lg">
            <Emoji symbol="🎉" label="Hacienda" />
            Recepción a las 14:00hrs
          </Text>
          <Link color="teal.500" href="https://pin.it/7Hgt3D8" isExternal>
            <Text fontSize="lg">Conoce la hacienda</Text>
          </Link>
        </Card>
        <Card
          subtitle={labels.indicaciones}
          title={labels.vestimentaFormal}
          bottom={
            <Text fontSize="2xl">
              <Emoji symbol="👫" label="pareja" />
              Sólo adultos
            </Text>
          }
        >
          <Text fontSize="lg">
            <Emoji symbol="🧍" label="hombe" />
            Hombres:{" "}
            <Link
              color="teal.500"
              href="https://pin.it/12IDC0Q"
              isExternal
              mb="1rem"
            >
              Guyabera blanca
            </Link>
          </Text>
          <Text fontSize="lg">
            <Emoji symbol="👗" label="mujer" />
            Mujeres:{" "}
            <Link
              color="teal.500"
              href="https://pin.it/3oLxvLb"
              isExternal
              mb="1rem"
            >
              Vestido largo
            </Link>
          </Text>
        </Card>
        <Card subtitle="Misa" title="Capilla San Jerónimo de Yaxcopoil">
          <Text fontSize="lg">
            Ubicada a un costado de la Hacienda Yaxcopoil.
          </Text>
        </Card>
        <Card
          subtitle="Recepción"
          title=" Hacienda Yaxcopoil"
          bottom={
            <Stack spacing="3">
              <Button>
                <Link href="https://goo.gl/maps/MLarKrS2r8sRNzzp7" isExternal>
                  Google Maps
                </Link>
              </Button>
              <Button>
                <Link
                  href={`https://ul.waze.com/ul?preview_venue_id=177144015.1771309082.14532059&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`}
                  isExternal
                >
                  Waze
                </Link>
              </Button>
            </Stack>
          }
        >
          <Text fontSize="lg">
            Calle 21 Número 500. Yaxcopoil, Yucatán, C. P. 97396. Km. 220,
            Carretera Federal 261, Mérida-Uxmal
          </Text>
        </Card>
      </Box>
    </Box>
  );
}
