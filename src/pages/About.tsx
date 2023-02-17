import { FC } from 'react';
import { Box, Flex, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import NavButton from '../components/NavButton';

import { container, items } from '../animations/staggerPopUp';

interface Props {
  handleTab: (newPath: string) => void;
}

const About: FC<Props> = ({ handleTab }) => {
  const navigate = useNavigate();

  return (
    <Box color="whiteAlpha.900" py="10">
      <Flex alignItems="center" justifyContent="space-between">
        <motion.div variants={container} initial="hidden" animate="show">
          <Text as={motion.p} variants={items} fontSize="4xl" fontWeight="bold">
            About Me
          </Text>
          <Text as={motion.p} variants={items} fontSize="xl" maxW="2xl" fontFamily="Inter">
            Hello, My name is Nibras Alyassar. I am currently an Informatic Student at Polytechnic Jakarta in Indonesia. So many things I want to explore in Informatic Technology
          </Text>
          <Text as={motion.p} variants={items} fontSize="4xl" fontWeight="semibold" mt="5">
            Focus
          </Text>
          <Text as={motion.p} variants={items} fontSize="xl" fontFamily="Inter">
            Web Developing | Machine Learning
          </Text>
          <Flex gap="3">
            <NavButton
              leftIcon={<FiArrowLeft />}
              onClick={() => {
                navigate('/react-portfo/');
                handleTab('/react-portfo/');
              }}
            >
              Hero
            </NavButton>
            <NavButton
              rightIcon={<FiArrowRight />}
              onClick={() => {
                navigate('/react-portfo/project');
                handleTab('/react-portfo/project');
              }}
            >
              Project
            </NavButton>
          </Flex>
        </motion.div>
        <Image src="./src/assets/donut.gif" alt="flying donut" />
      </Flex>
    </Box>
  );
};

export default About;
