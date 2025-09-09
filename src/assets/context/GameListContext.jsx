import { createContext, useState, useContext, useEffect } from "react";
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

const GameListContext = createContext();

export function GameListProvider({ children }) {
  const [savedGames, setSavedGames] = useState(() => {
    const savedGames = JSON.parse(localStorage.getItem('savedGames'));
    return savedGames || [];
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);
  const [randomGames, setRandomGames] = useState([]);

  useEffect(() => localStorage.setItem('savedGames', JSON.stringify(savedGames)), [savedGames])

  const fetchGames = async (formData) => {
    console.log(`${API_URL_BASE}/filter?tag=${formData}`)
    setError(null)
    try {
      const res = await fetch(`${API_URL_BASE}/filter?tag=${formData}`);
      if (!res.ok) throw new Error("Failed to fetch games");
      const data = await res.json();
      setFilteredGames(data);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const shuffleGames = (games) => {
    // fisher-yates shuffle
    // the fisher-yates shuffle ensures that no duplicates are possible
    // and that the list is shuffled fairly
    const gamesCopy = [...games] // do not change original array!
    for (let i = gamesCopy.length - 1; i > 0; i--) {
      // pick random index
      const j = Math.floor(Math.random() * (i + 1));
      // swap gamesCopy[i] and gamesCopy[j]
      [gamesCopy[i], gamesCopy[j]] = [gamesCopy[j], gamesCopy[i]];
    }
    return gamesCopy
  }

  const removeDuplicates = (games) => {
    // removes games already saved in savedGames
    // to not display them again when the user rolls for new games.
    const savedGamesIds = new Set(savedGames.map(game => game.id)) // get game id's for comparison
    const uniqueGames = games.filter(game => !savedGamesIds.has(game.id))
    return uniqueGames
  }

  const chooseRandomGames = (games, numberOfRandomGames = 3) => {
    // takes a list of games and randomly chooses and returns a list of length numberOfRandomGames
    // or games, whichever is shorter.
    const uniqueGames = removeDuplicates(games)
    const randomGamesList = shuffleGames(uniqueGames).slice(0, Math.min(numberOfRandomGames, uniqueGames.length));
    setRandomGames(randomGamesList);
  }

  return (
    <GameListContext.Provider value={{randomGames, loading, error, savedGames, filteredGames, fetchGames, setSavedGames, chooseRandomGames}}>{children}</GameListContext.Provider>
  );
}

export function useGameList() {
  return useContext(GameListContext);
}
