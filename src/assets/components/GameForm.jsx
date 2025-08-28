import { useState } from "react";
import { useGameList } from "../context/GameListContext";
import GameList from "./GameList";
const GameForm = () => {
  const [formData, setFormData] = useState([]);
  const { fetchGames, randomGame } = useGameList();
  const buttonText = randomGame ? "Reroll!" : "Find a Game";

  const options = [
    "MMORPG",
    "Shooter",
    "MOBA",
    "Anime",
    "Battle Royale",
    "Strategy",
    "Fantasy",
    "Sci-Fi",
    "Racing",
    "Fighting",
    "Social",
    "Sports",
  ];
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    checked
      ? setFormData([...formData, value])
      : setFormData(formData.filter((option) => option !== value));
  };

  const formatFormData = () => {
    const formattedData = formData.map((option) => option.toLowerCase());
    return formattedData.join(".").replace(/\s+/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.length === 0) return;
    fetchGames(formatFormData());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-base-100 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Choose Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
          {options.map((option) => (
            <label key={option} className="label">
              <input
                type="checkbox"
                value={option}
                checked={formData.includes(option)}
                onChange={handleChange}
                className="checkbox checkbox-success"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-success mt-4">
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default GameForm;
