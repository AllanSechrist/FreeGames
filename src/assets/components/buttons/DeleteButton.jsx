import { useGameList } from "../../context/GameListContext";

const DeleteButton = ({ id }) => {
  const { savedGames, setSavedGames } = useGameList();

  const deleteGame = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (confirmDelete) {
      setSavedGames(savedGames.filter((game) => game.id !== id));
    }
  };

  return <button onClick={deleteGame} className="btn btn-error">Delete</button>;
};

export default DeleteButton;
