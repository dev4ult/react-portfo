import { useState, SyntheticEvent } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RTDLink, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

const root = '/react-portfo';
const [about, projects, journey] = [root + '/about', root + '/projects', root + '/journey'];

function Navbar() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  function handleTab(newPath: string): void {
    setPath(newPath);
  }

  const handleStyle = (linkPath: string) => {
    return linkPath == path ? [NavLink, tabOn] : NavLink;
  };

  return (
    <Flex justifyContent="space-between" py="8" color="whiteAlpha.600" fontSize="lg" fontWeight="medium">
      <Link css={handleStyle(root)} as={RTDLink} to={root} onClick={handleTab.bind(null, root)}>
        Nibras
      </Link>
      <Flex gap="14">
        <Link css={handleStyle(about)} as={RTDLink} to={about} onClick={handleTab.bind(null, about)}>
          About
        </Link>
        <Link css={handleStyle(projects)} as={RTDLink} to={projects} onClick={handleTab.bind(null, projects)}>
          Projects
        </Link>
        <Link css={handleStyle(journey)} as={RTDLink} to={journey} onClick={handleTab.bind(null, journey)}>
          Journey
        </Link>
      </Flex>
    </Flex>
  );
}

const tabOn = css`
  color: white;
  text-decoration: underline;
  text-underline-offset: 20px;
`;

const NavLink = css`
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;
