import GameList from "../components/GameList";
import GameForm from "../components/GameForm";
import GameCard from "../components/GameCard";
import { useGameList } from "../context/GameListContext";



const HomePage = () => {
  const {randomGame} = useGameList();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300 space-y-4">
      {randomGame ? <GameCard game={randomGame} /> : <h1 className="text-4xl font-semibold mb-2 text-center">Find A Game</h1>}
      <GameForm />
    </div>
  );
};

export default HomePage;
