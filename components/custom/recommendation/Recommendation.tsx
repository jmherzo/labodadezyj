import { ReactElement, ReactNode } from "react";
import { Text, Stack, Flex, Image } from "@chakra-ui/react";

interface RecommendationProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  bottom?: ReactNode;
}

export function Recommendation({
  title,
  text,
  imageSrc,
  imageAlt,
  bottom,
}: RecommendationProps) {
  return (
    <Stack justifyContent="flexStart" textAlign="center" alignItems="center">
      <Flex w={150} h={150} mb={3}>
        <Image alt={imageAlt} src={imageSrc} rounded="full" />
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="lg" color={"gray.600"} textAlign="justify">
        {text}
      </Text>
      {bottom}
    </Stack>
  );
}
