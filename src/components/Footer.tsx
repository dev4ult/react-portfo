import { Box, Text, Link, Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import Marquee from 'react-fast-marquee';

function Footer() {
  return (
    <Box width="60" ml="auto" mt="auto" position="absolute" right="5" bottom="5">
      <Marquee gradient={false} direction="right">
        <Text color="whiteAlpha.900" fontFamily="Inter" display="flex" gap="2">
          | | Recently active on{' '}
          <Link color="whiteAlpha.600" href="https://github.com/dev4ult" isExternal fontFamily="Inter" _hover={{ color: 'white', textDecoration: 'none' }} display="flex" alignItems="center" gap="1">
            <SiGithub /> Github
          </Link>
        </Text>
      </Marquee>
    </Box>
  );
}

export default Footer;
