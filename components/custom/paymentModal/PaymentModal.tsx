import { useGlobalContext } from "@/utils/GlobalContext";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Text,
  VStack,
  Button,
  Input,
  useClipboard,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState, MouseEvent } from "react";
import { MercadoPagoButton } from "../mercadoPago";
import { useRouter } from "next/router";
import { pages } from "@/utils/pages";

type PaymentModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [paymentType, setPaymentType] = useState("transferencia");
  const { gift } = useGlobalContext();
  const router = useRouter();
  const data = {
    clabe: "014650606175512344",
    cuenta: "60617551234",
    nombre: "JESUS M HERNANDEZ",
  } as const;

  const { hasCopied: hasCopiedClabe, onCopy: onCopyClabe } = useClipboard(
    data.clabe,
  );
  const { hasCopied: hasCopiedCuenta, onCopy: onCopyCuenta } = useClipboard(
    data.cuenta,
  );
  const { hasCopied: hasCopiedNombre, onCopy: onCopyNombre } = useClipboard(
    data.nombre,
  );
  const { hasCopied: hasCopiedMonto, onCopy: onCopyMonto } =
    useClipboard("2000");

  function handleChange(e?: ChangeEvent<HTMLSelectElement>) {
    setPaymentType(e?.target.value ?? "transferencia");
  }

  function handleComplete(e?: MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    onClose();
    router.push(`/${pages.contactUs}`);
  }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={["full", "lg"]}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column">
            <Text py={2} fontSize="xl">
              Pasarela de pagos
            </Text>
            <Text fontSize="md" py={1}>
              Elige la opción para el pago de tu regalo:
            </Text>
            <Select
              py={2}
              size="lg"
              value={paymentType}
              onChange={handleChange}
            >
              <option value="transferencia">Transferencia Interbancaria</option>
              <option value="mercadoPago">Pago con Mercado Pago</option>
            </Select>
            {paymentType === "transferencia" ? (
              <VStack alignItems="flex-start">
                <Text py={1} fontSize="2xl" fontWeight="bold" color="red.500">
                  Santander
                </Text>
                <InputGroup size="md">
                  <InputLeftAddon>CLABE</InputLeftAddon>
                  <Input mr="3rem" value={data.clabe} isReadOnly pr={1} />
                  <InputRightElement>
                    <IconButton
                      colorScheme="cta"
                      aria-label={hasCopiedClabe ? "Copiado" : "Copiar"}
                      onClick={onCopyClabe}
                      icon={<CopyIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="md">
                  <InputLeftAddon>CUENTA</InputLeftAddon>
                  <Input mr="3rem" value={data.cuenta} isReadOnly pr={1} />
                  <InputRightElement>
                    <IconButton
                      colorScheme="cta"
                      aria-label={hasCopiedCuenta ? "Copiado" : "Copiar"}
                      onClick={onCopyCuenta}
                      icon={<CopyIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="md">
                  <InputLeftAddon>NOMBRE</InputLeftAddon>
                  <Input mr="3rem" value={data.nombre} isReadOnly pr={1} />
                  <InputRightElement>
                    <IconButton
                      colorScheme="cta"
                      aria-label={hasCopiedNombre ? "Copiado" : "Copiar"}
                      onClick={onCopyNombre}
                      icon={<CopyIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="md">
                  <InputLeftAddon>MONTO</InputLeftAddon>
                  <Input mr="3rem" value={gift.price} isReadOnly pr={1} />
                  <InputRightElement>
                    <IconButton
                      colorScheme="cta"
                      aria-label={hasCopiedMonto ? "Copiado" : "Copiar"}
                      onClick={onCopyMonto}
                      icon={<CopyIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
                <Text py={4}>
                  * Al finalizar la transferencia, regresa a esta pantalla y da
                  click en Pago Completado para enviarnos un mensaje.
                </Text>
              </VStack>
            ) : (
              <VStack>
                Mercado Pago
                <MercadoPagoButton />
              </VStack>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="cta" onClick={handleComplete}>
            Pago completado
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
