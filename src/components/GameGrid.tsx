import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <div className='text-danger'>{error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
