import { FC } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  progress: number;
}

const ScrollProgress: FC<Props> = ({ progress }) => {
  return (
    <Box h="47vh" w="1" bg="whiteAlpha.100" rounded="full" overflow="hidden">
      <Box bg="whiteAlpha.900" w="1" h={`${progress}%`} rounded="full"></Box>
    </Box>
  );
};

export default ScrollProgress;
