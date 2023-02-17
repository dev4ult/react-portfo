import { Link, IconButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FC, ReactElement } from 'react';

interface Props {
  href: string;
  ariaLabel: string;
  icon: ReactElement;
}

const IconLink: FC<Props> = ({ href, ariaLabel, icon }) => {
  return (
    <Link href={href} isExternal>
      <IconButton css={btnStyle} aria-label={ariaLabel} icon={icon} />
    </Link>
  );
};

const btnStyle = css`
  background-color: #202020;
  &:hover {
    background-color: #2e2e2e;
  }
`;

export default IconLink;
