import { useState } from "react";
import { useGameList } from "../context/GameListContext";
const GameForm = () => {
  const [formData, setFormData] = useState([]);
  const {fetchGames} = useGameList();

  const options = ["MMORPG", "Shooter", "MOBA", "Anime", "Battle Royale", "Strategy", "Fantasy", "Sci-Fi", "Racing", "Fighting", "Social", "Sports"];
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    checked
      ? setFormData([...formData, value])
      : setFormData(formData.filter((option) => option !== value));
  };


  const formatFormData = () => {
    const formattedData = formData.map((option) => (option.toLowerCase()))

    return formattedData.join(".").replace(/\s+/g, "")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.length === 0) return
    fetchGames(formatFormData());
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Choose Categories</h3>
        <div className="grid grid-cols-2 gap-1">
          {options.map((option) => (
            <label key={option} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.includes(option)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="flex flex-col">
          <button className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700">
            Find My Game!
          </button>
        </div>
      </form>
    </>
  );
};

export default GameForm;
