import { useState, useEffect } from "react";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${API_URL_BASE}/games`);
        if(!res.ok) throw new Error("Failed to fetch games");
        const data = await res.json();
        // ----- DEBUG
        console.log(data)
        // ----- END DEBUG
        setGames(data);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [])

  return <div></div>;

};

export default HomePage;
