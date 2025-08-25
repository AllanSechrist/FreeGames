import { createContext, useState, useEffect, useContext } from "react";
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

const GameListContext = createContext();

export function GameListProvider({ children }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchGames = async (formData) => {
    console.log(`${API_URL_BASE}/filter?tag=${formData}`)
    setError(null)
    try {
      const res = await fetch(`${API_URL_BASE}/filter?tag=${formData}`);
      if (!res.ok) throw new Error("Failed to fetch games");
      const data = await res.json();
      setGames(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchGames();
  // }, []);

  return (
    <GameListContext.Provider value={{games, loading, error, fetchGames}}>{children}</GameListContext.Provider>
  );
}

export function useGameList() {
  return useContext(GameListContext);
}
