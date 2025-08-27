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
  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => localStorage.setItem('savedGames', JSON.stringify(savedGames)), [savedGames])

  const fetchGames = async (formData) => {
    console.log(`${API_URL_BASE}/filter?tag=${formData}`)
    setError(null)
    try {
      const res = await fetch(`${API_URL_BASE}/filter?tag=${formData}`);
      if (!res.ok) throw new Error("Failed to fetch games");
      const data = await res.json();
      chooseRandomGame(data)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const chooseRandomGame = (games) => {
    console.log(games.length);
    setRandomGame(games[Math.floor(Math.random() * games.length)]);
    console.log(randomGame);
  }

  return (
    <GameListContext.Provider value={{randomGame, loading, error, savedGames, fetchGames, setSavedGames}}>{children}</GameListContext.Provider>
  );
}

export function useGameList() {
  return useContext(GameListContext);
}
