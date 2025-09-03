import GameList from "../components/GameList";
import GameForm from "../components/GameForm";
import GameCard from "../components/GameCard";
import Carousel from "../components/Carousel";
import { useGameList } from "../context/GameListContext";

const HomePage = () => {
  const { randomGame } = useGameList();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300 space-y-4">
      {randomGame ? <Carousel /> : ""}

      <GameForm />
    </div>
  );
};

export default HomePage;
