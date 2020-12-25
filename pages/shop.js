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

  // Load in the Simple Goods script (just once, empty dependency array for componentDidMount behavior)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app-cdn.simplegoods.co/assets/external/embed-485d19e15c0d820b38f2851a2490d28cacbb489e8ec728bb882843aaf50c14f0.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      SGEmbed.init();
    };
  }, []);

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
              Shop
            </Heading>

            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Sheet music for select piano compositions available now. Secure
              checkout provided by Stripe, and pdf's are delivered instantly by
              email as soon as your order is placed. Virtual instruments, sample
              packs and other merch coming soon!
            </Text>

            <Heading
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
              marginTop="30px"
            >
              Six Mile Creek
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Piano composition featured on Sonder House Recollections Vol. 5
            </Text>
            <a
              href="https://app.simplegoods.co/i/YXWQOJXA"
              className="simple-goods-btn"
              style={{ margin: "20px", backgroundColor: "#2ab2fe" }}
            >
              Buy 'Six Mile Creek' Sheet Music
            </a>

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
              Piano composition on First Light EP, released on Joshua Tree
              Records
            </Text>
            <a
              href="https://app.simplegoods.co/i/YXWQOJXA"
              className="simple-goods-btn"
              style={{ margin: "20px", backgroundColor: "#2ab2fe" }}
            >
              Buy 'Return' Sheet Music
            </a>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Music;
