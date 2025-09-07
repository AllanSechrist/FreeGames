import GameList from "../components/GameList";
import { useGameList } from "../context/GameListContext";
const GameListPage = () => {
  const {savedGames} = useGameList();
  const noGamesMessage = "Your saved games list is empty"

  return (
    <GameList games={savedGames} emptyListMessage={noGamesMessage}/>
  );
}

export default GameListPage;
