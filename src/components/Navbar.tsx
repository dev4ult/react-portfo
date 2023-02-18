import { FC, useEffect } from 'react';
import { Flex, Link, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Link as RTDLink, useLocation } from 'react-router-dom';

const root = '/react-portfo';
const [about, project, journey] = [root + '/about', root + '/project', root + '/journey'];

interface Props {
  page: string;
  handleTab: (newPath: string) => void;
}

const Navbar: FC<Props> = ({ page, handleTab }) => {
  const location = useLocation();

  useEffect(() => {
    handleTab(location.pathname);
  }, []);

  const handleStyle = (linkPath: string) => {
    return linkPath == page ? [NavLink, TabOn] : NavLink;
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" py="8" gap="14" color="whiteAlpha.600" fontSize="lg" fontWeight="medium">
      <Link css={handleStyle(root)} as={RTDLink} to={root} onClick={handleTab.bind(null, root)}>
        Nibras
      </Link>
      <Box display={['block', 'none']}>
        <Menu>
          <MenuButton>
            <HamburgerIcon fontSize="2xl" />
          </MenuButton>
          <MenuList color="blackAlpha.800">
            <MenuItem as={RTDLink} to={about}>
              About
            </MenuItem>
            <MenuItem as={RTDLink} to={project}>
              Project
            </MenuItem>
            <MenuItem as={RTDLink} to={journey}>
              Journey
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Flex gap="14" display={['none', 'flex']}>
        <Link css={handleStyle(about)} as={RTDLink} to={about} onClick={handleTab.bind(null, about)}>
          About
        </Link>
        <Link css={handleStyle(project)} as={RTDLink} to={project} onClick={handleTab.bind(null, project)}>
          Project
        </Link>
        <Link css={handleStyle(journey)} as={RTDLink} to={journey} onClick={handleTab.bind(null, journey)}>
          Journey
        </Link>
      </Flex>
    </Flex>
  );
};

const TabOn = css`
  color: white;
  text-decoration: underline;
  text-underline-offset: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = css`
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;
