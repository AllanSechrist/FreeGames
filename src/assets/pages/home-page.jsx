import GameList from "../components/GameList";
import GameForm from "../components/GameForm";
import GameCard from "../components/GameCard";
import Carousel from "../components/Carousel";
import { useGameList } from "../context/GameListContext";
import { HiH1 } from "react-icons/hi2";

const HomePage = () => {
  const { randomGame } = useGameList();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300 space-y-4">
      {randomGame ? <Carousel /> : <h1 className="font-semibold text-4xl text-center">Find a Game</h1>}

      <GameForm />
    </div>
  );
};

export default HomePage;
