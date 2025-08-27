import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const GameList = () => {
  const { savedGames } = useGameList();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {savedGames.length > 0
          ? savedGames.map((game) => <GameCard key={game.id} game={game} />)
          : "Your saved game list is empty."}
      </div>
    </>
  );
};

export default GameList;
