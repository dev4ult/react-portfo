import { FC } from 'react';
import { Box, Flex, Text, VStack, Grid, GridItem } from '@chakra-ui/react';
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
    <Box pt={[5, 10]} pb="20">
      <motion.div variants={items} initial="hidden" animate="show">
        <Text fontSize={['2xl', '3xl', '4xl']} color="whiteAlpha.900" fontWeight="bold">
          Project List
        </Text>
        <Text fontSize={['md', 'lg', 'xl']} color="whiteAlpha.800" fontFamily="Inter">
          All of my cool website project i build since 2022
        </Text>
      </motion.div>
      <Grid as={motion.div} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} variants={container} initial="hidden" animate="show" gap="2" mt="8">
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Weather App"
            img_source="./src/images/weather-app.jpg"
            github_source="https://github.com/dev4ult/react-weather-app"
            technologies={
              <>
                <SiReact />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Simple Chat App"
            img_source="./src/images/simple-chat-app.jpg"
            github_source="https://github.com/dev4ult/chat-app-with-socket-io"
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
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Match Us"
            img_source="./src/images/memory-card-game.jpg"
            github_source="https://github.com/dev4ult/memory-card-game"
            technologies={
              <>
                <SiHtml5 />
                <SiJava />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="LSP"
            img_source="./src/images/lsp.jpg"
            github_source="https://github.com/dev4ult/project-LSP"
            technologies={
              <>
                <SiPhp />
                <SiMariadb />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Bookshelf App"
            img_source="./src/images/bookshelf-app.jpg"
            github_source="https://github.com/dev4ult/Bookshelf-App"
            technologies={
              <>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Simple Todo App"
            img_source="./src/images/todo-app.jpg"
            github_source="https://github.com/dev4ult/simple-react-todo"
            technologies={
              <>
                <SiReact />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Movie List"
            img_source="./src/images/movie-list.jpg"
            github_source="https://github.com/dev4ult/fetching-omdb-movie-api"
            technologies={
              <>
                <SiHtml5 />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Markdown Note App"
            img_source="./src/images/markdown-note-app.jpg"
            github_source="https://github.com/dev4ult/react-markdown-note-app"
            technologies={
              <>
                <SiReact />
                <SiCss3 />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Simple Contact App"
            img_source="./src/images/express-contact-app.jpg"
            github_source="https://github.com/dev4ult/express-contact-app"
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
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Card
            title="Flyhigh Skate Shop"
            img_source="./src/images/flyhigh-skate-shop.jpg"
            github_source="https://github.com/dev4ult/flyhigh-website"
            technologies={
              <>
                <SiPhp />
                <SiMariadb />
                <SiTailwindcss />
                <SiJavascript />
              </>
            }
          />
        </GridItem>
        <GridItem as={motion.div} variants={items}>
          <Box as={motion.a} target="_blank" href="https://github.com/dev4ult?tab=repositories" css={GithubCard} variants={items} h="full" rounded="md" p="4">
            <VStack spacing="5" className="card-content" textAlign="center" color="whiteAlpha.500">
              <Box fontSize="5xl">
                <SiGithub />
              </Box>
              <Text fontSize="xl" fontWeight="semibold">
                More Open Source Project
              </Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
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
  background-color: RGBA(255, 255, 255, 0.04);
  border: 1px solid RGBA(255, 255, 255, 0.08);
  display: flex;
  padding-block: 50px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  .card-content {
    transition: all 0.3s ease;
  }

  &:hover .card-content {
    color: RGBA(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }
`;

export default Project;
