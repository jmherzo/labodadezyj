import { Box, Text } from "@chakra-ui/react";
import Countdown from "react-countdown";
import styles from "./timer.module.css";

type DigitProps = {
  digit: number;
  label: string;
};
function Digit({ digit, label }: DigitProps) {
  return (
    <Box className={styles.digitContainer}>
      <Box fontSize="5xl">{digit}</Box>
      <Box fontSize="lg">{label}</Box>
    </Box>
  );
}

export function Timer() {
  return (
    <Box className={styles.container}>
      <Text fontSize="lg" className={styles.title}>
        Faltan
      </Text>
      <Countdown
        date={"2022-11-05T14:00:00"}
        renderer={({ days, hours, minutes, seconds, completed }: any) => {
          if (completed) {
            // TODO: test today
            return "It's today!";
          } else {
            return (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Digit digit={days} label="Días" />
                <Digit digit={hours} label="Horas" />
                <Digit digit={minutes} label="Minutos" />
                <Digit digit={seconds} label="Segundos" />
              </Box>
            );
          }
        }}
      />
    </Box>
  );
}
