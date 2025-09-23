import { useGameList } from "../../context/GameListContext";
import { PiTrashThin } from "react-icons/pi";

const DeleteButton = ({ id }) => {
  const { savedGames, setSavedGames } = useGameList();

  const deleteGame = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this game?"
    );

    if (confirmDelete) {
      setSavedGames(savedGames.filter((game) => game.id !== id));
    }
  };

  return <button onClick={deleteGame}>
    <PiTrashThin className="text-3xl"/>
  </button>;
};

export default DeleteButton;
