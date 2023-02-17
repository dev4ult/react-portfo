import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import NavButton from '../components/NavButton';

interface Props {
  handleTab: (newPath: string) => void;
}

const About: FC<Props> = ({ handleTab }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Flex gap="3">
        <NavButton
          leftIcon={<FiArrowLeft />}
          onClick={() => {
            navigate('/react-portfo/');
            handleTab('/react-portfo/');
          }}
        >
          Hero
        </NavButton>
        <NavButton
          rightIcon={<FiArrowRight />}
          onClick={() => {
            navigate('/react-portfo/project');
            handleTab('/react-portfo/project');
          }}
        >
          Project
        </NavButton>
      </Flex>
    </div>
  );
};

export default About;
