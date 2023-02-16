import { FC, useEffect, useState, SyntheticEvent } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RTDLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const root = '/react-portfo';
const [about, projects, journey] = [root + '/about', root + '/projects', root + '/journey'];

function Navbar() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  function handleTab(e: SyntheticEvent<HTMLAnchorElement>): void {
    console.log(e.target.href);
  }

  return (
    <Flex justifyContent="space-between" py="8" color="whiteAlpha.600" fontSize="lg" fontWeight="medium">
      <NavLink as={RTDLink} to={root} onClick={handleTab}>
        Nibras
      </NavLink>
      <Flex gap="14">
        <NavLink as={RTDLink} to={about} onClick={handleTab}>
          About
        </NavLink>
        <NavLink as={RTDLink} to={projects} onClick={handleTab}>
          Projects
        </NavLink>
        <NavLink as={RTDLink} to={journey} onClick={handleTab}>
          Journey
        </NavLink>
      </Flex>
    </Flex>
  );
}

const NavLink = styled(Link)`
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export default Navbar;
