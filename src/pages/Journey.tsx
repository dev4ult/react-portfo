import { FC, useState, useEffect } from 'react';
import { Box, Flex, Text, List, ListItem, ListIcon, UnorderedList, Image } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { CgShapeRhombus } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import NavButton from '../components/NavButton';
import ScrollProgress from '../components/ScrollProgress';

import { container, items } from '../animations/staggerPopUp';

interface Props {
  handleTab: (newPath: string) => void;
}

const Journey: FC<Props> = ({ handleTab }) => {
  const [scrollTop, setScrollTop] = useState<number>(4);
  const navigate = useNavigate();

  useEffect(() => {
    const journeyContainer = document.querySelector('.journey') as HTMLElement;
    journeyContainer.addEventListener('scroll', function () {
      const winScroll = journeyContainer.scrollTop;
      const height = journeyContainer.scrollHeight - journeyContainer.clientHeight;

      const scrolled = (winScroll / height) * 100;

      setScrollTop(scrolled);
    });

    return () =>
      journeyContainer.removeEventListener('scroll', function () {
        const winScroll = journeyContainer.scrollTop;
        const height = journeyContainer.scrollHeight - journeyContainer.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
      });
  }, []);

  return (
    <Flex direction={['column-reverse', 'row']} justifyContent="space-between" gap="5" alignItems="center" pt={[5, 10]} pb="20">
      <Box>
        <Box as={motion.div} variants={container} initial="hidden" animate="show">
          <Text as={motion.p} variants={items} fontSize={['2xl', '3xl', '4xl']} fontWeight="semibold" color="white">
            Web Development Journey
          </Text>
          <Flex as={motion.div} variants={items} gap="3" mt="5" color="whiteAlpha.800" h="47vh">
            <ScrollProgress progress={scrollTop} />
            <List className="journey" overflowY="auto" fontSize="lg">
              <ListItem>
                Oct 2021 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <Text color="white">It all started with HTML and CSS</Text>
              </ListItem>
              <ListItem mt="10">
                Apr 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <UnorderedList color="white">
                  <ListItem>HTML Layouting</ListItem>
                  <ListItem>Build a landing page as a small project</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem mt="10">
                Jun 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <UnorderedList color="white">
                  <ListItem>Start to learn about PHP</ListItem>
                  <ListItem>How CRUD works in a website</ListItem>
                  <ListItem>Learn TailwindCSS</ListItem>
                  <ListItem>Build an FE Landing Page for a competition</ListItem>
                  <ListItem>Build a Web Catalogue with PHP</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem mt="10">
                Jul 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <Text color="white">Build a FE for a Career Development Center website</Text>
              </ListItem>
              <ListItem mt="10">
                Sep 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <UnorderedList color="white">
                  <ListItem>Try NodeJS and ExpressJS as Web BE Framework</ListItem>
                  <ListItem>Build a Simple Contact App with ExpressJS</ListItem>
                  <ListItem>Learn Git & Github</ListItem>
                  <ListItem>Learn to implement OOP and MVC in Building a website using PHP</ListItem>
                  <ListItem>Build a Sertification (LSP) Website with PHP</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem mt="10">
                Oct 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <Text color="white">ReactJS is my dream Web FE Framework</Text>
              </ListItem>
              <ListItem mt="10">
                Oct 2022 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <Text color="white">A simple Markdown Note with ReactJS</Text>
              </ListItem>
              <ListItem mt="10">
                Jan 2023 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <Text color="white">Build a Weather and Todo App with ReactJS</Text>
              </ListItem>
              <ListItem mt="10">
                Feb 2023 <ListIcon fontSize="xl" as={CgShapeRhombus} />
                <UnorderedList color="white">
                  <ListItem>Learn a structure of Full-Stack Web with MERN</ListItem>
                  <ListItem>Learn JWT Authentication & React Redux</ListItem>
                  <ListItem>Learn about Typescript</ListItem>
                </UnorderedList>
              </ListItem>
            </List>
          </Flex>
        </Box>
        <NavButton
          leftIcon={<FiArrowLeft />}
          onClick={() => {
            navigate('/react-portfo/project');
            handleTab('/react-portfo/project');
          }}
        >
          Project
        </NavButton>
      </Box>
      <Image src="./src/images/javascript.png" objectFit="cover" w={[40, 52, 80]} alt="javascript logo" />
    </Flex>
  );
};

export default Journey;
