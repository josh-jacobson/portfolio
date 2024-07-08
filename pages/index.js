import React from "react";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/core";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
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
            Josh Jacobson
          </Heading>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="1200px"
          mt={8}
        >
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Josh Jacobson is a LA-based composer and electronic producer, bringing together elements of dance music and soulful, meditative piano to create his own unique sound. Spiritual, textural, cinematic and inspired by time in nature, Josh's music is sure to take you somewhere.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Josh grew up in a musical family in Ithaca NY and was classically trained on piano from the age of five. He then studied jazz for many years and developed an interest in dance music while in school at Northwestern University, spinning late night sets on the college radio station and catching Chicago shows by major influences like James Blake, Bonobo and Jamie xx.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Josh's music career began in 2015 after his early releases gained momentum on Soundcloud. He quit his job to go on tour, opening for artists like Petit Biscuit and Louis the Child and playing an early DJ set at Splash House.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            In the years since, Josh has performed all over the world and his music has earned support from KCRW, Rinse FM, Indie Shuffle, Nylon and Earmilk, with over 100 million streams to date. Josh has also collaborated on recent releases by Laufey, Lizzy McAlpine, Alec Benjamin, BAYNK, Tim Atlas, Jonah Kagen and Delaney Bailey, and composed original music for Mazda, Roland and a documentary featured in the Manhattan Film Festival. His song 'Home' was featured in a 2023 episode of the TV series Bel Air.
          </Text>




        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
