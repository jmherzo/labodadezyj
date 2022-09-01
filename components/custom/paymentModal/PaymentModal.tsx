import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFocusScope,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  VStack,
  Button,
  Input,
  useClipboard,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

type PaymentModalProps = {
  isOpen: boolean;
  onClose(): void;
  // monto: number;
};

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [paymentType, setPaymentType] = useState("transferencia");
  const data = {
    clabe: "014650606175512344",
    cuenta: "60617551234",
    nombre: "JESUS M HERNANDEZ Z",
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
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={["full", "md"]}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Pasarela de pago</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDir="column">
            <Text fontSize="md">
              Tenemos 2 opciones seguras para realizar el pago del regalo.
            </Text>
            <Select
              py={5}
              size="lg"
              value={paymentType}
              onChange={handleChange}
            >
              <option value="transferencia">Transferencia bancaria</option>
              <option value="mercadoPago">Pago con Mercado Pago</option>
            </Select>
            <Box>
              {paymentType === "transferencia" ? (
                <VStack alignItems="flex-start">
                  <Text pb={2} fontSize="2xl" fontWeight="bold" color="red.500">
                    Santander
                  </Text>
                  <Text fontSize="md">Clabe Interbancaria</Text>
                  <Flex pb={1}>
                    <Input
                      mr={1}
                      variant="filled"
                      value={data.clabe}
                      isReadOnly
                    />
                    <Button onClick={onCopyClabe}>
                      {hasCopiedClabe ? "Copiado" : "Copiar"}
                    </Button>
                  </Flex>
                  <Text fontSize="md">Cuenta</Text>
                  <Flex pb={1}>
                    <Input
                      mr={1}
                      variant="filled"
                      value={data.cuenta}
                      isReadOnly
                    />
                    <Button onClick={onCopyCuenta}>
                      {hasCopiedCuenta ? "Copiado" : "Copiar"}
                    </Button>
                  </Flex>
                  <Text fontSize="md">Nombre</Text>
                  <Flex pb={1}>
                    <Input
                      mr={1}
                      variant="filled"
                      value={"JESUS M HERNANDEZ Z"}
                      isReadOnly
                    />
                    <Button onClick={onCopyNombre}>
                      {hasCopiedNombre ? "Copiado" : "Copiar"}
                    </Button>
                  </Flex>
                  <Text fontSize="md">Monto</Text>
                  <Flex pb={1}>
                    <Input mr={1} variant="filled" value={2000} isReadOnly />
                    <Button onClick={onCopyMonto}>
                      {hasCopiedMonto ? "Copiado" : "Copiar"}
                    </Button>
                  </Flex>
                </VStack>
              ) : (
                <div>Mercado Pago</div>
              )}
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => {
              window.open("https://wa.me/+5212225225414");
            }}
          >
            Mandar un WhatsApp
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
