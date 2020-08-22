import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/about";
const title = "Josh Jacobson | Collaborations";

const Collaborations = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Collaborations
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Live
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Touring keyboardist for Banks, Delacey, Full Crate, Corey Harper
              and more. Music director for Zeke Finn & Biako. Original string
              quartet orchestration and live performances
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Performed at major music festivals including Outside Lands and
              Austin City Limits.
            </Text>

            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Studio
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Ley Line, Black Gatsby, Carmody, India Carney, Raelee Nikole,
              Lizzy McAlpine, BAYNK, Gigamesh
            </Text>

            <iframe
              src="https://open.spotify.com/embed/playlist/2nVen6QtiLreSKwkWaaPjA"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Collaborations;
