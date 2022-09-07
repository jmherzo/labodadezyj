import { postFetcher } from "@/utils/fetcher";
import { ArrowBackIcon, AtSignIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Link,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Button } from "../custom/button";
import { Footer } from "../footer";

export function ContactUsPage() {
  function handleOnClick(e: any) {
    e?.preventDefault();
    postFetcher("https://eosdq23uijbxeuz.m.pipedream.net", {});
  }
  return (
    <form>
      <VStack py={[5, 10]} px={8}>
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center" alignSelf="flex-start">
              <ArrowBackIcon />
              <Text fontSize="md" pl={1}>
                Regresar
              </Text>
            </Link>
          </NextLink>
          <VStack spacing={{ base: 6, md: 5 }} align="stretch">
            <Heading
              fontSize={{
                base: "4xl",
                md: "6xl",
              }}
              display="flex"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              ¡Gracias por tu regalo!
            </Heading>
            <Text fontSize="lg">
              Mándanos tu mensaje llenando los siguientes campos:
            </Text>
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
                rows={5}
                resize="none"
                size="md"
              />
            </FormControl>
          </VStack>
          <Button colorScheme="cta" type="submit">
            Enviar mensaje
          </Button>
        </VStack>
      </VStack>
      <Footer />
    </form>
  );
}
