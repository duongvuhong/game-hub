import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width='300px'
      borderRadius={{ sm: '5px', md: '5px', lg: '10px', xl: '15px' }}
      overflow='hidden'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
