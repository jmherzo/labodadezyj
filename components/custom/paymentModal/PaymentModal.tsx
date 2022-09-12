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
  Highlight,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState, MouseEvent, FocusEventHandler } from "react";
import { MercadoPagoButton } from "../mercadoPago";
import { useRouter } from "next/router";
import { pages } from "@/utils/pages";
import NextImage from "next/image";

type PaymentModalProps = {
  isOpen: boolean;
  onClose(): void;
};

type PaymentMethods = "transferencia" | "mercadoPago";

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [paymentType, setPaymentType] =
    useState<PaymentMethods>("transferencia");
  const [amount, setAmount] = useState(1000);
  const { gift, setGift } = useGlobalContext();
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
  const { hasCopied: hasCopiedMonto, onCopy: onCopyMonto } = useClipboard(
    gift.price.toString(),
  );

  function handlePaymentChange(e?: ChangeEvent<HTMLSelectElement>) {
    setPaymentType((e?.target.value ?? "transferencia") as PaymentMethods);
  }

  function handleComplete(e?: MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    onClose();
    router.push(`/${pages.contactUs}`);
  }

  const handleOnBlurAmount: FocusEventHandler<HTMLInputElement> = (e) => {
    console.log("amount", Number(e.target.value));
    setGift({
      id: 0,
      description: "Regalo abierto a Andrea y Jesus",
      price: Number(e.target.value),
      amount: 1,
      imageSrc: "",
    });
    console.log("price", gift.price);
  };

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
              onChange={handlePaymentChange}
            >
              <option value="transferencia">Transferencia Interbancaria</option>
              <option value="mercadoPago">Pago con Mercado Pago</option>
            </Select>
            {paymentType === "transferencia" ? (
              <VStack alignItems="flex-start">
                <Flex py={2}>
                  <NextImage src="/santander.png" width={170} height={60} />
                </Flex>
                <InputGroup size="md">
                  <InputLeftAddon width="6rem">CLABE</InputLeftAddon>
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
                  <InputLeftAddon width="6rem">CUENTA</InputLeftAddon>
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
                  <InputLeftAddon width="6rem">NOMBRE</InputLeftAddon>
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
                {gift.price !== 0 && (
                  <InputGroup size="md">
                    <InputLeftAddon width="6rem">MONTO</InputLeftAddon>
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
                )}
                <Text py={4}>
                  <Highlight
                    query="Completado"
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "cta.100",
                    }}
                  >
                    * Al finalizar la transferencia en tu banca electrónica,
                    regresa a esta pantalla y da click en Completado para
                    enviarnos un mensaje.
                  </Highlight>
                </Text>
              </VStack>
            ) : (
              <VStack align="stretch" px={3} py={5}>
                <Flex justifyContent="flex-start">
                  <NextImage src="/mercado-pago.webp" width={152} height={40} />
                </Flex>
                {gift.id !== 0 ? (
                  <VStack pt={8} align="center" spacing={10}>
                    <Image
                      alt={`Imagen de ${gift.description}`}
                      rounded={"lg"}
                      height={170}
                      width={220}
                      objectFit={"cover"}
                      src={gift.imageSrc}
                      shadow="base"
                    />
                    <VStack spacing={1}>
                      <Text fontSize={"xl"}>{gift.description}</Text>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        {`$${gift.price} MXN`}
                      </Text>
                    </VStack>
                  </VStack>
                ) : (
                  <VStack pt={5} align="stretch" spacing={3}>
                    <Flex alignSelf="center" rounded="lg">
                      <Image
                        alt="Imagen de regalos"
                        rounded={"lg"}
                        height={150}
                        width={200}
                        objectFit={"cover"}
                        src="/gifts-min.webp"
                        shadow="base"
                      />
                    </Flex>
                    <Text>Escribe la cantidad que te gustaría regalarnos:</Text>
                    <NumberInput
                      size="lg"
                      step={100}
                      onBlur={handleOnBlurAmount}
                    >
                      <NumberInputField placeholder={"Ejemplo: 1000"} />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </VStack>
                )}
              </VStack>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          {paymentType === "transferencia" ? (
            <Button colorScheme="cta" onClick={handleComplete}>
              Completado
            </Button>
          ) : (
            <MercadoPagoButton isDisabled={gift.price < 100} />
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
