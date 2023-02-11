import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";
import ProjectCard from "../components/ProjectCard";
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

            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
            >
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                Listen
              </Heading>
              <Text color={secondaryTextColor[colorMode]} mb={4}>
                Available on all music services including Spotify, Tidal and Apple Music. Listen on Spotify here:
              </Text>
              <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
                <Box>
                  <iframe
                    src="https://open.spotify.com/embed/playlist/4AYGAq5C2Fed6qIssfiL13"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </Box>
                <Box>
                  <iframe
                    src="https://open.spotify.com/embed/playlist/7xjxKrr6uHuAmghuwhhUO7"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </Box>
              </SimpleGrid>
            </Flex>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              <br></br>Josh's music has earned worldwide attention, with well over 70 million Spotify streams and support from major tastemakers and radio stations including KCRW and London’s Rinse FM. He's also contributed production, writing, and keyboards to recent releases by Alec Benjamin, BAYNK, Tim Atlas, Lizzy McAlpine and Delaney Bailey, and composed original music for Mazda, Roland, and a documentary featured in the Manhattan Film Festival. 
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As a solo artist, Josh has performed all over the world including
              a headline US tour and music festival performances including
              Brooklyn Electronic Music Festival and Splash House. Josh has also
              opened for major dance acts including Petit Biscuit and Louis the
              Child as direct support. In collaboration with other artists, Josh has also performed at Coachella, Outside Lands and major European festivals, and appearing on TV shows ranging all the way from The Tonight Show and Jimmy Kimmel to Good Morning America and Ellen.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Here are just a few of the outlets that have featured Josh's music:
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Press / Radio
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Huffington Post, KCRW, Rinse FM London, Nest HQ, Indie Shuffle, Nylon, and Earmilk.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              In-store play
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Starbucks Reserve, MAC, Abercrombie & Fitch, Hollister, Joe &
              the Juice and other stores
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              Spotify editorial playlists
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Peaceful Piano, Classical New Releases,New Music Friday UK, Chill Vibes, Young & Free, Chill Tracks, 
              Calm Vibes, and many others. Also featured in playlists by
              independent curators including ChilledCow, Nike, Chillhop and Pickup Music.
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
              Instrumental side projects:
            </Heading>
            <ProjectCard
            title="Treman"
            description="Modern classical piano"
            href="https://open.spotify.com/artist/7MnTSJ0nl9IdMRSq3vLdGP?si=qdHsyw8qRRu1OSZ_NQhlHQ"
            image="/juniper_200.jpg"
          />
          <ProjectCard
            title="azula"
            description="Lofi hip hop & instrumental collaborations"
            href="https://open.spotify.com/artist/1ExCrobB2mqThavegHEHeS?si=z3XhuKqMRvSCYO2EomMe8A"
            image="/beginnings_200.jpeg"
          />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
