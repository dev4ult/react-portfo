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
    <Box color="whiteAlpha.900" pt={[5, 10]} pb="20">
      <Flex direction={['column-reverse', 'row']} alignItems="center" justifyContent="space-between" gap="5">
        <motion.div variants={container} initial="hidden" animate="show">
          <Text as={motion.p} variants={items} fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
            Me
          </Text>
          <Text as={motion.p} variants={items} fontSize={['md', 'lg', 'xl']} maxW="2xl" fontFamily="Inter" color="whiteAlpha.800">
            Hi, My name is Nibras Alyassar. I am currently an Informatic Student at Polytechnic Jakarta in Indonesia.
          </Text>
          <Text as={motion.p} variants={items} fontSize={['2xl', '3xl', '4xl']} fontWeight="semibold" mt="5">
            Focus
          </Text>
          <Text as={motion.p} variants={items} color="whiteAlpha.800" fontSize={['md', 'lg', 'xl']} fontFamily="Inter">
            Web Development | Machine Learning
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
        <Image as={motion.img} variants={items} initial="hidden" height={['44', '60', '80']} animate="show" src="./src/assets/donut.gif" alt="flying donut" />
      </Flex>
    </Box>
  );
};

export default About;
