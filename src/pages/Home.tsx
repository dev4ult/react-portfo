import { Flex, Box, Text, HStack } from '@chakra-ui/react';
import { SiGithub, SiTwitter, SiInstagram, SiLinkedin } from 'react-icons/si';
import IconLink from '../components/IconLink';
import { motion } from 'framer-motion';
import { Model } from '../components/Laptop';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Home() {
  return (
    <Flex direction={['column-reverse', 'row']} gap="5" alignItems="center" justifyContent="space-between" color="white" py="10">
      <div>
        <Text fontSize="3xl" fontWeight="semibold">
          Nibras Alyassar
        </Text>
        <Text fontSize="5xl" fontWeight="bold">
          Full Stack Web Developer
        </Text>
        <HStack spacing="3" mt="2">
          <IconLink href="https://github.com/dev4ult" ariaLabel="github" icon={<SiGithub />} />
          <IconLink href="https://twitter.com/nibras_alyassar" ariaLabel="twitter" icon={<SiTwitter />} />
          <IconLink href="" ariaLabel="instagram" icon={<SiInstagram />} />
          <IconLink href="https://www.linkedin.com/in/nibras-alyassar-90526918b/" ariaLabel="linkedin" icon={<SiLinkedin />} />
        </HStack>
      </div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <Box height="80">
          <Canvas>
            <OrbitControls autoRotate={true} autoRotateSpeed={10} enableZoom={false} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight intensity={1} />
            <Model />
          </Canvas>
        </Box>
      </motion.div>
    </Flex>
  );
}

export default Home;
