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
  Link
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
              Listen
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
              <Text color={secondaryTextColor[colorMode]} mb={4}>
                Available on all streaming services and Bandcamp. Listen on Spotify here:
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
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Link
              href="https://joshjacobson.bandcamp.com/"
              title="bandcamp"
              icon="bandcamp"
              isExternal
            >Listen on Bandcamp</Link>

            {/* <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
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
            /> */}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
