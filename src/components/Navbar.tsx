import { useState, SyntheticEvent } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RTDLink, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

const root = '/react-portfo';
const [about, projects, journey] = [root + '/about', root + '/projects', root + '/journey'];

function Navbar() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  function handleTab(e: SyntheticEvent<HTMLAnchorElement>): void {
    console.log(e.target);
  }

  return (
    <Flex justifyContent="space-between" py="8" color="whiteAlpha.600" fontSize="lg" fontWeight="medium">
      <Link css={NavLink} as={RTDLink} to={root} onClick={handleTab}>
        Nibras
      </Link>
      <Flex gap="14">
        <Link css={NavLink} as={RTDLink} to={about} onClick={handleTab}>
          About
        </Link>
        <Link css={NavLink} as={RTDLink} to={projects} onClick={handleTab}>
          Projects
        </Link>
        <Link css={NavLink} as={RTDLink} to={journey} onClick={handleTab}>
          Journey
        </Link>
      </Flex>
    </Flex>
  );
}

const NavLink = css`
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;
