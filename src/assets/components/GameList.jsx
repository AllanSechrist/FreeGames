import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const GameList = () => {
  const {savedGames, isOpen, setIsOpen} = useGameList();
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700">
        Open Saved Games List
      </button>
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedGames.length > 0 ? savedGames.map((game) => (<GameCard game={game} />)) : "Your saved game list is empty."}

          <button onClick={() => setIsOpen(false)} className="mt-4 bg-gray-500 text-white px-3 py-1 rounded">Close</button>
        </div>
      )}
    </>
  )
};

export default GameList;
