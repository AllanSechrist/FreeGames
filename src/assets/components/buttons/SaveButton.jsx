import { useGameList } from "../../context/GameListContext";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";

const SaveButton = ({ game }) => {
  const { savedGames, setSavedGames } = useGameList();
  return (
    <button
      onClick={() => setSavedGames([...savedGames, game])}
      disabled={savedGames.some((saved) => saved.id === game.id)}
    >
      {savedGames.some((saved) => saved.id === game.id) ? (
        <PiHeartFill className="text-3xl text-pink-400"/>
      ) : (
        <PiHeartThin className="text-3xl text-pink-400" />
      )}
    </button>
  );
};

export default SaveButton;
//  <button
//       onClick={() => setSavedGames([...savedGames, game])}
//       disabled={savedGames.some((saved) => saved.id === game.id)}
//       className={`btn btn-outline ${
//         savedGames.some((saved) => saved.id === game.id) &&
//         "opacity-50 cursor-not-allowed"
//       }`}
//     >
//       {savedGames.some((saved) => saved.id === game.id) ? "Saved!" : "Save"}
//     </button>
