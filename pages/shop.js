import React, { useState, useEffect } from "react";
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
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/shop";
const title = "Josh Jacobson | Shop";
const description =
  "Sheet music, virtual instruments and merch by Josh Jacobson";

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
          maxWidth="1200px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="1200px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Shop
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for select piano compositions available now. Secure
              checkout provided by Stripe, and pdf's are delivered instantly by
              email as soon as your order is placed.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              All future updates (including new versions of sheet music) will also be delivered automatically to your email address, as provided during checkout.
            </Text>

            <Heading
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
              marginTop="30px"
            >
              Return
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for "Return", a composition for solo piano. Four pages, pdf format. Fully notated score.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              For beginner pianists and those with smaller hands, I recommend rolling larger chords upward from the bass notes, and using the pedal to your advantage. Enjoy, and feel free to reach out by email for support of any kind while you're learning the music!
            </Text>
            <a className="gumroad-button" href="https://joshjacobson.gumroad.com/l/return">Buy 'Return' Sheet Music</a>



            <Heading
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
              marginTop="30px"
            >
              Echoes in the Wind
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for solo piano
            </Text>
            <a className="gumroad-button" href="https://joshjacobson.gumroad.com/l/echoes">Buy 'Echoes in the Wind' Sheet Music</a>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
