import { FC } from 'react';
import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import { SiReact, SiPhp, SiMariadb, SiHtml5, SiCss3, SiJava, SiJavascript, SiTailwindcss, SiExpress, SiSocketdotio } from 'react-icons/si';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import NavButton from '../components/NavButton';

import { container, items } from '../animations/staggerPopUp';

interface Props {
  handleTab: (newPath: string) => void;
}

const Project: FC<Props> = ({ handleTab }) => {
  const navigate = useNavigate();

  return (
    <Box py="10">
      <motion.div variants={items} initial="hidden" animate="show">
        <Text fontSize="4xl" color="whiteAlpha.900" fontWeight="bold">
          Project List
        </Text>
        <Text fontSize="xl" color="whiteAlpha.900" fontFamily="Inter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, assumenda.
        </Text>
      </motion.div>
      <Flex as={motion.div} variants={container} initial="hidden" animate="show" wrap="wrap" gap="2" mt="8">
        <Card
          as={motion.div}
          variants={items}
          title="React Weather App"
          imgSrc="./src/images/weather-app.jpg"
          githubSrc="https://github.com/dev4ult/react-weather-app"
          technologies={
            <>
              <SiReact />
              <SiJavascript />
              <SiTailwindcss />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Simple Chat App"
          imgSrc="./src/images/simple-chat-app.jpg"
          githubSrc="https://github.com/dev4ult/chat-app-with-socket-io"
          technologies={
            <>
              <SiExpress />
              <SiSocketdotio />
              <SiJavascript />
              <SiHtml5 />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Match Us"
          imgSrc="./src/images/memory-card-game.jpg"
          githubSrc="https://github.com/dev4ult/memory-card-game"
          technologies={
            <>
              <SiJavascript />
              <SiJava />
              <SiHtml5 />
              <SiTailwindcss />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="LSP"
          imgSrc="./src/images/lsp.jpg"
          githubSrc="https://github.com/dev4ult/project-LSP"
          technologies={
            <>
              <SiPhp />
              <SiMariadb />
              <SiTailwindcss />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Bookshelf App"
          imgSrc="./src/images/bookshelf-app.jpg"
          githubSrc="https://github.com/dev4ult/Bookshelf-App"
          technologies={
            <>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Bookshelf App"
          imgSrc="./src/images/bookshelf-app.jpg"
          githubSrc="https://github.com/dev4ult/Bookshelf-App"
          technologies={
            <>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Bookshelf App"
          imgSrc="./src/images/bookshelf-app.jpg"
          githubSrc="https://github.com/dev4ult/Bookshelf-App"
          technologies={
            <>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Bookshelf App"
          imgSrc="./src/images/bookshelf-app.jpg"
          githubSrc="https://github.com/dev4ult/Bookshelf-App"
          technologies={
            <>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </>
          }
        />
      </Flex>
      <Flex gap="3">
        <NavButton
          leftIcon={<FiArrowLeft />}
          onClick={() => {
            navigate('/react-portfo/about');
            handleTab('/react-portfo/about');
          }}
        >
          About
        </NavButton>
        <NavButton
          rightIcon={<FiArrowRight />}
          onClick={() => {
            navigate('/react-portfo/journey');
            handleTab('/react-portfo/journey');
          }}
        >
          Journey
        </NavButton>
      </Flex>
    </Box>
  );
};

export default Project;
