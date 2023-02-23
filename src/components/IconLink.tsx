import { Link, IconButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FC, ReactElement } from 'react';

interface Props {
  href: string;
  ariaLabel: string;
  icon: ReactElement;
  [key: string]: any;
}

const IconLink: FC<Props> = (props) => {
  const { href, ariaLabel, icon } = props;
  return (
    <Link {...props} href={href} isExternal>
      <IconButton bgColor="buttonBg" color="buttonColor" _hover={{ bgColor: 'buttonBg' }} aria-label={ariaLabel} icon={icon} />
    </Link>
  );
};

export default IconLink;
