import { Button, useToast } from "@chakra-ui/react";
import Router from "next/router";
import { useGlobalContext } from "@/utils/GlobalContext";
import axios from "axios";
import { Gift } from "@/lib/types";
import { useState } from "react";

type MercadoPagoButtonProps = {
  isDisabled?: boolean;
};
export function MercadoPagoButton({ isDisabled }: MercadoPagoButtonProps) {
  const { gift } = useGlobalContext();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  async function postConfigurePayment(gift: Gift) {
    try {
      setLoading(true);
      // TODO: research mercado pago create preference response type
      const { data } = await axios.post("/api/configure-payment", {
        gift,
      });
      if (data) {
        Router.push(data?.init_point);
      }
    } catch (e) {
      console.log("Error in post to /api/configure-payment", e);
      toast({
        title: "Error en Mercado Pago, intenta más tarde.",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    postConfigurePayment(gift);
  }

  return (
    <Button
      size="md"
      colorScheme="blue"
      onClick={handleClick}
      isLoading={loading}
      isDisabled={isDisabled}
    >
      Ir a pago seguro
    </Button>
  );
}
