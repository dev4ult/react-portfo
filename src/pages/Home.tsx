import { Flex, Box, Text, HStack, IconButton } from '@chakra-ui/react';
import { SiGithub, SiTwitter, SiInstagram, SiLinkedin } from 'react-icons/si';
import styled from '@emotion/styled';
import { Model } from '../components/Laptop';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Home() {
  return (
    <Flex alignItems="center" justifyContent="space-between" color="white" py="10">
      <div>
        <Text fontSize="3xl" fontWeight="semibold">
          Nibras Alyassar
        </Text>
        <Text fontSize="5xl" fontWeight="bold">
          Full Stack Web Developer
        </Text>
        <HStack spacing="3" mt="2">
          <Socmed aria-label="github" icon={<SiGithub />} />
          <Socmed aria-label="twitter" icon={<SiTwitter />} />
          <Socmed aria-label="instagram" icon={<SiInstagram />} />
          <Socmed aria-label="linkedin" icon={<SiLinkedin />} />
        </HStack>
      </div>
      <Box height="80">
        <Canvas>
          <OrbitControls autoRotate={true} autoRotateSpeed={10} enableZoom={false} />
          <ambientLight intensity={1} />
          <Model />
        </Canvas>
      </Box>
    </Flex>
  );
}

const Socmed = styled(IconButton)`
  background-color: #292929;
  &:hover {
    background-color: #333333;
  }
`;

export default Home;
