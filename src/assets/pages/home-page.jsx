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
      {games.map((game) => (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <img src={game.thumbnail} alt="thumbnail" />
          <div className="flex justify-between">
            <h4 className="text-md font-semibold">{game.title}</h4>
            <h4 className="text-md font-semibold">{game.platform}</h4>
          </div>
          <div className="flex justify-between">
            <h4 className="text-md font-semibold">{game.developer}</h4>
            <h4 className="text-md font-semibold">{game.release_date}</h4>
          </div>
          <p className="text-sm">{game.short_description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
