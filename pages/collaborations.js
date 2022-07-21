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

const url = "https://joshjacobsonmusic.com/collaborations";
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

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I produce, write, record piano & synths and occasionally mix and master records in collaboration with a wide variety of artists.
            </Text>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Some of my most releases are with artists including Alec Benjamin, Lizzy McAlpine, BAYNK, Tim Atlas, Dillan Witherow and Delaney Bailey. 
            </Text>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I've also worked on arrangements and string orchestration for touring shows and live installations, and provided music direction for artists including Phantogram, Zeke Finn and Sofia Carson.
            </Text>
            
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a live keyboardist and singer, I've gotten to perform all over the world including major European festivals and Coachella, Outside Lands, a headline set at the Seoul Jazz Festival and appearances on several TV shows including The Tonight Show and Jimmy Kimmel Live.
            </Text>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              This playlist features some of my collaborative work:
            </Text>

            <iframe
              src="https://open.spotify.com/embed/playlist/4AYGAq5C2Fed6qIssfiL13"
              width="300"
              height="380"
              frameBorder="0"
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
