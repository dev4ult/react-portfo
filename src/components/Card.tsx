import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Card;
