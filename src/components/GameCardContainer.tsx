import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in'
      }}
      borderRadius={{ sm: '5px', md: '5px', lg: '10px', xl: '15px' }}
      overflow='hidden'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
