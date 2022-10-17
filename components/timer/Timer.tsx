import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import styles from "./timer.module.css";

type DigitProps = {
  digit: number;
  label: string;
};

type CountDownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};
function Digit({ digit, label }: DigitProps) {
  return (
    <Box className={styles.digitContainer} color="black">
      <Box fontSize="5xl">{digit}</Box>
      <Box fontSize="lg">{label}</Box>
    </Box>
  );
}

export function Timer() {
  const [showCountDown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);
  return (
    <Box className={styles.container} bg="tusk" color="black">
      <Text fontSize="2xl" className={styles.title}>
        Faltan
      </Text>
      {showCountDown ? (
        <Countdown
          date={"2022-11-05T13:00:00"}
          renderer={({
            days,
            hours,
            minutes,
            seconds,
            completed,
          }: CountDownProps) => {
            if (completed) {
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
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Digit digit={0} label="Días" />
          <Digit digit={0} label="Horas" />
          <Digit digit={0} label="Minutos" />
          <Digit digit={0} label="Segundos" />
        </Box>
      )}
    </Box>
  );
}
