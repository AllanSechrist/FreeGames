import { useState, useEffect } from "react";
import GameList from "../components/GameList";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${API_URL_BASE}/games`);
        if (!res.ok) throw new Error("Failed to fetch games");
        const data = await res.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <GameList games={games} />
    </div>
  );
};

export default HomePage;
