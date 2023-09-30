import { Box, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (error) <div className='text-danger'>{error.message}</div>;

  return (
    <Box padding='10px'>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {(isLoading || isFetchingNextPage) &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
      <div ref={ref} />
    </Box>
  );
};

export default GameGrid;
