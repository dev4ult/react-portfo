import { FC } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { SiReact, SiPhp, SiMariadb, SiHtml5, SiCss3, SiJava, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiSocketdotio, SiGithub } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

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
          title="Weather App"
          imgSrc="./src/images/weather-app.jpg"
          githubSrc="https://github.com/dev4ult/react-weather-app"
          technologies={
            <>
              <SiReact />
              <SiTailwindcss />
              <SiJavascript />
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
              <FaNodeJs />
              <SiExpress />
              <SiSocketdotio />
              <SiHtml5 />
              <SiJavascript />
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
              <SiHtml5 />
              <SiJava />
              <SiTailwindcss />
              <SiJavascript />
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
          title="Simple Todo App"
          imgSrc="./src/images/todo-app.jpg"
          githubSrc="https://github.com/dev4ult/simple-react-todo"
          technologies={
            <>
              <SiReact />
              <SiTailwindcss />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Movie List"
          imgSrc="./src/images/movie-list.jpg"
          githubSrc="https://github.com/dev4ult/fetching-omdb-movie-api"
          technologies={
            <>
              <SiHtml5 />
              <SiTailwindcss />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Markdown Note App"
          imgSrc="./src/images/markdown-note-app.jpg"
          githubSrc="https://github.com/dev4ult/react-markdown-note-app"
          technologies={
            <>
              <SiReact />
              <SiCss3 />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Simple Contact App"
          imgSrc="./src/images/express-contact-app.jpg"
          githubSrc="https://github.com/dev4ult/express-contact-app"
          technologies={
            <>
              <FaNodeJs />
              <SiExpress />
              <SiMongodb />
              <SiTailwindcss />
              <SiJavascript />
            </>
          }
        />
        <Card
          as={motion.div}
          variants={items}
          title="Flyhigh Skate Shop"
          imgSrc="./src/images/flyhigh-skate-shop.jpg"
          githubSrc="https://github.com/dev4ult/flyhigh-website"
          technologies={
            <>
              <SiPhp />
              <SiMariadb />
              <SiTailwindcss />
              <SiJavascript />
            </>
          }
        />
        <Flex as={motion.a} target="_blank" href="https://github.com/dev4ult?tab=repositories" css={GithubCard} variants={items} bg="whiteAlpha.50" borderWidth="1px" borderColor="whiteAlpha.200" w="60" rounded="md" p="4">
          <VStack spacing="5" className="card-content" textAlign="center" color="whiteAlpha.500">
            <Box fontSize="5xl">
              <SiGithub />
            </Box>
            <Text fontSize="xl" fontWeight="semibold">
              More Open Source Project
            </Text>
          </VStack>
        </Flex>
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

const GithubCard = css`
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  .card-content {
    transition: all 0.3s ease;
  }

  &:hover .card-content {
    color: white;
    transition: all 0.3s ease;
  }
`;

export default Project;
