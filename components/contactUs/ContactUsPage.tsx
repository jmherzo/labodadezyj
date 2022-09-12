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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import NextLink from "next/link";
import React from "react";
import { Button } from "../custom/button";
import { Footer } from "../footer";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactUsPage() {
  const toast = useToast();

  async function postMessage(values: FormValues, resetForm: () => void) {
    try {
      await axios.post("https://eosdq23uijbxeuz.m.pipedream.net", {
        values,
      });
      toast({
        title: "Tu mensaje ha sido enviado",
        status: "success",
        isClosable: true,
      });
      resetForm();
    } catch (e) {
      console.log("Error in post to pipedream", e);
      toast({
        title: "Error en Mercado Pago, intenta más tarde.",
        status: "error",
        isClosable: true,
      });
    }
  }

  async function handleSubmit(
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) {
    return await postMessage(values, resetForm);
  }
  return (
    <>
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
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              email: "",
              name: "",
              message: "",
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing={{ base: 4, md: 5 }} align="stretch">
                  <Field name="name">
                    {({ field }: FieldProps) => (
                      <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <InputGroup size="md">
                          <InputLeftElement>
                            <AtSignIcon />
                          </InputLeftElement>
                          <Input {...field} placeholder="Aquí va tu nombre" />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }: FieldProps) => (
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <InputGroup size="md">
                          <InputLeftElement>
                            <EmailIcon />
                          </InputLeftElement>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Aquí va tu email"
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="message">
                    {({ field }: FieldProps) => (
                      <FormControl isRequired>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          {...field}
                          placeholder="Aquí va tu mensaje"
                          rows={5}
                          resize="none"
                          size="md"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    colorScheme="cta"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Enviar mensaje
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
