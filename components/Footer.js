import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link
        href="https://open.spotify.com/artist/3KpCBwmIHMdBD3GzV1xNtE?si=nfgF1g0mSlShupyOik4GKg"
        title="Spotify"
        icon="spotify"
        isExternal
      >
        <IconButton
          aria-label="Spotify"
          icon="spotify"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.instagram.com/joshjacobsongs/"
        title="Instagram"
        icon="instagram"
        isExternal
      >
        <IconButton
          aria-label="Instagram"
          icon="instagram"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.youtube.com/joshjacobsongs"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon="youtube"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:joshjacobsonmusic@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;
