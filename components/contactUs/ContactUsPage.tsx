import { ArrowBackIcon, AtSignIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
  Text,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "../custom/button";
import { Footer } from "../footer";

export function ContactUsPage() {
  return (
    <>
      <VStack px={8} pt={4} alignItems="flex-start" h="100vh">
        <LinkBox p={3} display="flex" alignItems="center">
          <ArrowBackIcon />
          <Text fontSize="lg" pl={2}>
            <LinkOverlay href="/">Regresar</LinkOverlay>
          </Text>
        </LinkBox>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }} align="stretch">
          <Heading
            fontSize={{
              base: "4xl",
              md: "6xl",
            }}
            pb={1}
            display="flex"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            ¡Gracias por tu regalo!
          </Heading>
          <Text fontSize="md">Mándanos un mensaje:</Text>
          <Flex
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            flexDir="column"
            justifyContent="stretch"
          >
            <VStack spacing={6} align="stretch">
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <InputGroup size="md">
                  <InputLeftElement>
                    <AtSignIcon />
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Aquí va tu nombre"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup size="md">
                  <InputLeftElement>
                    <EmailIcon />
                  </InputLeftElement>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Aquí va tu email"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Mensaje</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Aquí va tu mensaje"
                  rows={6}
                  resize="none"
                  size="md"
                />
              </FormControl>
            </VStack>
          </Flex>
          <Button colorScheme="cta">Enviar mensaje</Button>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
