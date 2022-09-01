import { ReactElement } from "react";
import { Text, Stack, Flex, Image } from "@chakra-ui/react";

interface RecommendationProps {
  title: string;
  content: ReactElement | string;
  imageSrc: string;
  imageAlt: string;
  bottom?: ReactElement;
}

export function Recommendation({
  title,
  content,
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
      {content}
      {bottom}
    </Stack>
  );
}
