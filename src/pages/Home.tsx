import { FC } from 'react';
import { Flex, Box, Text, HStack, Image } from '@chakra-ui/react';
import { SiGithub, SiTwitter, SiInstagram, SiLinkedin } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import IconLink from '../components/IconLink';
import NavButton from '../components/NavButton';

import { container, items } from '../animations/staggerPopUp';

import AnimatedBlob from '../assets/blobanimation.svg';

interface Props {
  handleTab: (newPath: string) => void;
}

const Home: FC<Props> = ({ handleTab }) => {
  const navigate = useNavigate();

  return (
    <Flex direction={['column-reverse', 'row']} gap="5" alignItems="center" justifyContent="space-between" color="secondary" pt={[5, 10]} pb="20">
      <div>
        <motion.div variants={items} initial="hidden" animate="show">
          <Text fontSize={['xl', '2xl', '3xl']} fontWeight="semibold">
            Nibras Alyassar
          </Text>
          <Text fontSize={['3xl', '4xl', '5xl']} fontFamily="Archivo" fontWeight="bold" color="primary">
            Full Stack Web Developer
          </Text>
        </motion.div>
        <HStack as={motion.div} variants={container} initial="hidden" animate="show" spacing="3" mt="3">
          <IconLink as={motion.a} variants={items} href="https://github.com/dev4ult" ariaLabel="github" icon={<SiGithub />} />
          <IconLink as={motion.a} variants={items} href="https://twitter.com/nibras_alyassar" ariaLabel="twitter" icon={<SiTwitter />} />
          <IconLink as={motion.a} variants={items} href="https://www.instagram.com/naga_indosayur/" ariaLabel="instagram" icon={<SiInstagram />} />
          <IconLink as={motion.a} variants={items} href="https://www.linkedin.com/in/nibras-alyassar-90526918b/" ariaLabel="linkedin" icon={<SiLinkedin />} />
        </HStack>
        <NavButton
          rightIcon={<FiArrowRight />}
          onClick={() => {
            navigate('/react-portfo/about');
            handleTab('/react-portfo/about');
          }}
        >
          About
        </NavButton>
      </div>
      <Box w={[44, 60, 80]}>
        <Image src={AnimatedBlob} alt="blob" />
      </Box>
    </Flex>
  );
};

export default Home;
