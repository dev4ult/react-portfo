import { FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

interface Props {
  children: ReactNode;
  [key: string]: any;
}

const NavButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Button {...props} css={ButtonCss} as={motion.div} initial={{ opacity: 0, left: 50 }} animate={{ opacity: 1, left: 0 }}>
      {children}
    </Button>
  );
};

const ButtonCss = css`
  color: RGBA(255, 255, 255, 0.92);
  border-radius: 100px;
  margin-top: 1.5rem;
  cursor: pointer;
  background-color: RGBA(255, 255, 255, 0.16);
  &:hover {
    background-color: RGBA(255, 255, 255, 0.06);
  }
`;

export default NavButton;
