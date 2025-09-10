import { useState, useEffect, useRef } from "react";
import { useGameList } from "../context/GameListContext";
import GameList from "./GameList";
const GameForm = () => {
  const [formData, setFormData] = useState([]);
  const prevFormData = useRef([]);
  const { fetchGames, randomGames, filteredGames, chooseRandomGames } =
    useGameList();
  const buttonText = randomGames.length ? "Reroll!" : "Find a Game";

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

  // Check if from data has changed for resubmission
  useEffect(() => {
    if (prevFormData.current !== formData) {
      console.log("Form data Changed");
      console.log("Previous: ", prevFormData.current);
      console.log("Current: ", formData);
    }
  }, [formData]);



  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    checked
      ? setFormData([...formData, value])
      : setFormData(formData.filter((option) => option !== value));
  };

  const formatFormData = () => {
    const formattedData = formData.map((option) => option.toLowerCase());
    return formattedData.join(".").replace(/\s+/g, "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.length === 0) return;

    const shouldRefetch =
      prevFormData.current !== formData || filteredGames.length === 0;

    if (shouldRefetch) {
      prevFormData.current = formData;
      // get new games based on new form data
      const games = await fetchGames(formatFormData());
      if (games.length > 0) {
        prevFormData.current = formData;
        chooseRandomGames(games);
      } else {
        console.log("No Games") // DEBUG
      }
    } else {
      // Choose from the list of games already fetched.
      filteredGames.length > 0 ? chooseRandomGames(filteredGames) : console.log("No Games");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-base-100 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Choose Tags</h3>
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
          <button className="btn btn-success mt-4">{buttonText}</button>
        </div>
      </form>
    </>
  );
};

export default GameForm;
