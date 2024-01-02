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
              I produce, write, record piano & synths and occasionally master records in collaboration with a wide variety of artists. Some of my most recent releases are with Laufey, Alec Benjamin, Lizzy McAlpine, BAYNK, Tim Atlas, Jonah Kagen and Delaney Bailey.
            </Text>
            
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a composer and producer, I endeavor to bring an intuitive feel and thoughtful minimalism to everything I create. Collaboration always comes first, and I tend to take on a slightly different role in every project based on what's needed. If you have a film, production or recording project coming up and think my music could be a good fit, I'd love to hear from you.
            </Text>
            
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a live keyboardist and singer, I've gotten to perform all over the world including major European festivals and Coachella, Outside Lands, Seoul Jazz Festival and appearances on several TV shows including The Tonight Show and Jimmy Kimmel Live.
            </Text>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              This playlist features my discography including collaborative work:
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
