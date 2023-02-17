import { Flex, Box, Text, HStack, Button } from '@chakra-ui/react';
import { FC } from 'react';
import { SiGithub, SiTwitter, SiInstagram, SiLinkedin } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import IconLink from '../components/IconLink';
import { motion } from 'framer-motion';
import { Model } from '../components/Laptop';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Props {
  handleTab: (newPath: string) => void;
}

const Home: FC<Props> = ({ handleTab }) => {
  const navigate = useNavigate();

  return (
    <Flex direction={['column-reverse', 'row']} gap="5" alignItems="center" justifyContent="space-between" color="whiteAlpha.900" py="10">
      <div>
        <Text as={motion.div} variants={items} initial="hidden" animate="show" fontSize="3xl" fontWeight="semibold">
          Nibras Alyassar
        </Text>
        <Text as={motion.div} variants={items} initial="hidden" animate="show" fontSize="5xl" fontWeight="bold">
          Full Stack Web Developer
        </Text>
        <HStack as={motion.div} variants={container} initial="hidden" animate="show" spacing="3" mt="2">
          <IconLink as={motion.a} variants={items} href="https://github.com/dev4ult" ariaLabel="github" icon={<SiGithub />} />
          <IconLink as={motion.a} variants={items} href="https://twitter.com/nibras_alyassar" ariaLabel="twitter" icon={<SiTwitter />} />
          <IconLink as={motion.a} variants={items} href="https://www.instagram.com/naga_indosayur/" ariaLabel="instagram" icon={<SiInstagram />} />
          <IconLink as={motion.a} variants={items} href="https://www.linkedin.com/in/nibras-alyassar-90526918b/" ariaLabel="linkedin" icon={<SiLinkedin />} />
        </HStack>
        <Button
          as={motion.div}
          initial={{ opacity: 0, left: 50 }}
          animate={{ opacity: 1, left: 0 }}
          mt="7"
          cursor="pointer"
          rounded="full"
          bg="whiteAlpha.300"
          _hover={{ bg: 'whiteAlpha.100' }}
          onClick={() => {
            navigate('/react-portfo/about');
            handleTab('/react-portfo/about');
          }}
          rightIcon={<FiArrowRight />}
        >
          About
        </Button>
      </div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} whileHover={{ cursor: 'grab' }} whileTap={{ scale: 0.8, cursor: 'grabbing' }}>
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
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default Home;
