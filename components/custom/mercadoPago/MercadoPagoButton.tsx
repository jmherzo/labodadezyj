import { Button } from "@chakra-ui/react";
import Router from "next/router";
import useSWR from "swr";
import { getFetcher } from "@/utils/fetcher";

export function MercadoPagoButton() {
  const { data } = useSWR("/api/configure-payment", getFetcher);

  function handleClick() {
    console.log("data", data);
    Router.push(data?.init_point);
  }
  return (
    <Button size="md" colorScheme="blue" onClick={handleClick}>
      Pagar
    </Button>
  );
}
