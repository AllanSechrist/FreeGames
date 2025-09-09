import GameList from "../components/GameList";
import { useGameList } from "../context/GameListContext";
const GameListPage = () => {
  const {savedGames} = useGameList();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300 space-y-4">
      <GameList games={savedGames} emptyListMessage={<span>No saved games!</span>}/>
    </div>
  );
}

export default GameListPage;
