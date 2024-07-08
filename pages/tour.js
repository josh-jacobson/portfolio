import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Box,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";

const url = "https://joshjacobsonmusic.com/tour";
const title = "Josh Jacobson | Tour";

const Tour = () => {
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
              Tour
            </Heading>
            <Link href="https://www.songkick.com/artists/8549484" className="songkick-widget">
                <a data-theme="dark" data-track-button="on" data-detect-style="on" data-locale="en" data-other-artists="on" data-share-button="on" data-country-filter="on" data-rsvp="on" data-request-show="on" data-past-events="off" data-past-events-offtour="off" data-remind-me="off" style={{display: "none"}}></a>
              </Link>
            <SimpleGrid columns={{sm:1, md:2}} spacing={10}>
              
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Tour;
