import { Box, Image, Text, HStack, Link, Button } from '@chakra-ui/react';
import { FC } from 'react';
import { SiGithub } from 'react-icons/si';

interface Props {
  imgSrc: string;
  title: string;
  githubSrc?: string;
  technologies: JSX.Element;
  [key: string]: any;
}

const Card: FC<Props> = (props) => {
  const { imgSrc, title, githubSrc, technologies } = props;
  return (
    <Box {...props} bgColor="whiteAlpha.100" rounded="md" color="whiteAlpha.500" overflow="hidden" borderWidth="1px" borderColor="whiteAlpha.100" backdropBlur="3xl">
      <Box borderWidth="1px" borderColor="whiteAlpha.300" mt="4">
        <Image w="full" h="48" src={imgSrc} alt="project img" objectFit="cover" />
      </Box>
      <Box p="4">
        <Text fontWeight="semibold" fontSize="xl">
          {title}
        </Text>
        <HStack spacing="15px" fontSize="2xl" mt="2" mb="5" color="white">
          {technologies}
        </HStack>
        {githubSrc && (
          <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.800' }} href={githubSrc} isExternal fontSize="lg" display="flex" alignItems="center" gap="2">
            <span>Source</span>
            <SiGithub />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Card;
