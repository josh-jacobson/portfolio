import React, { useState } from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/blog";
const title = "Josh Jacobson | Original Music";
const description = "Original music by Josh Jacobson";

const Music = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
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
              Original Music
            </Heading>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a solo artist, Josh has performed all over the world including
              a headline US tour and music festival performances including
              Brooklyn Electronic Music Festival and Splash House. Josh has also
              opened for major dance acts including Petit Biscuit and Louis the
              Child as direct support.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Press / Radio
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Featured on tastemaker channels and press outlets including
              Huffington Post, KCRW, Nest HQ, Indie Shuffle, Nylon, and Earmilk.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              In-store play
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Starbucks Reserve, MAC, Abercrombie & Fitch, Hollister, Joe and
              the Juice and other stores
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Playlist features
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Chill Vibes, Young & Free, Chill Tracks, Classical New Releases,
              New Music Friday UK and many others. Also featured in playlists by
              independent curators including Nike, Chillhop and Pickup Music.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              Treman: piano music
            </Heading>
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              azula: lofi hip hop & instrumental beats
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
