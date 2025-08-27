import GameList from "../components/GameList";
import GameForm from "../components/GameForm";
import GameCard from "../components/GameCard";
import { useGameList } from "../context/GameListContext";



const HomePage = () => {
  const {randomGame} = useGameList();
  return (
    <div className="grid place-items-center min-h-screen bg-base-300">
      {randomGame ? <GameCard game={randomGame} /> : <h2 className="text-lg font-semibold mb-2 text-center">Fill out the checkboxes and I'll help you find a new game to play!</h2>}
      <GameForm />
    </div>
  );
};

export default HomePage;
