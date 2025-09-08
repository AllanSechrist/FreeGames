import GameList from "../components/GameList";
import { useGameList } from "../context/GameListContext";
const GameListPage = () => {
  const {savedGames} = useGameList();

  return (
    <GameList games={savedGames} emptyListMessage={<span>No saved games!</span>}/>
  );
}

export default GameListPage;
