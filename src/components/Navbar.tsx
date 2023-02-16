import { FC } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RTDLink } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <Flex>
      <Link as={RTDLink} to="/">
        dev5ult
      </Link>
      <div>
        <Link as={RTDLink} to="/about">
          About
        </Link>
        <Link as={RTDLink} to="/projects">
          Projects
        </Link>
      </div>
    </Flex>
  );
};

export default Navbar;
