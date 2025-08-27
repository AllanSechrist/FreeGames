import { useGameList } from "../../context/GameListContext";

const SaveButton = ({ game }) => {
  const { savedGames, setSavedGames } = useGameList();
  return (
    <button
      onClick={() => setSavedGames([...savedGames, game])}
      disabled={savedGames.some((saved) => saved.id === game.id)}
      className={`btn btn-outline ${
        savedGames.some((saved) => saved.id === game.id) &&
        "opacity-50 cursor-not-allowed"
      }`}
    >
      {savedGames.some((saved) => saved.id === game.id) ? "Saved!" : "Save"}
    </button>
  );
};

export default SaveButton;
