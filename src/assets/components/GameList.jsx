import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const GameList = () => {
  const {games, loading, error} = useGameList();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <div className='error'>{ error }</div>}
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GameList;
