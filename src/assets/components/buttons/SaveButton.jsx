import { useGameList } from "../../context/GameListContext";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const SaveButton = ({ game, numHearts=8 }) => {
  const { savedGames, setSavedGames } = useGameList();
  const [particles, setParticles] = useState([]);

  const isSaved = savedGames.some((saved) => saved.id === game.id);

  const spawnHearts = useCallback(() => {
    const rand = (min, max) => Math.random() * (max - min) + min;

    const burst = Array.from({ length: numHearts }).map((_, i) => ({
      id: Date.now() + i,
      x: rand(-60, 60),
      y: rand(-120, -60), // float up
      scale: rand(0.7, 1.4),
      rotate: rand(-40, 40),
      duration: rand(0.6, 1.2),
      color: "text-pink-400",
    }));

    setParticles((prev) => [...prev, ...burst]);
  }, [numHearts]);

  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClick = () => {
    setSavedGames((prev) => {
      // save only unsaved games
      if (prev.some((saved) => saved.id === game.id)) return prev;
      return [...prev, game];
    });

    if (!isSaved) spawnHearts();
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        disabled={isSaved}
        aria-label={isSaved ? "Saved" : "Save"}
      >
        {savedGames.some((saved) => saved.id === game.id) ? (
          <PiHeartFill className="text-3xl text-pink-400" />
        ) : (
          <PiHeartThin className="text-3xl text-pink-400 transition-transform duration-200 hover:scale-125" />
        )}
      </button>
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0.9, x: 0, y: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 0,
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              rotate: particle.rotate,
            }}
            transition={{ duration: particle.duration, ease: "easeOut" }}
            onAnimationComplete={() => removeParticle(particle.id)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <PiHeartFill className={`${particle.color} drop-shadow`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SaveButton;
//  <button
//       onClick={() => setSavedGames([...savedGames, game])}
//       disabled={savedGames.some((saved) => saved.id === game.id)}
//       className={`btn btn-outline ${
//         savedGames.some((saved) => saved.id === game.id) &&
//         "opacity-50 cursor-not-allowed"
//       }`}
//     >
//       {savedGames.some((saved) => saved.id === game.id) ? "Saved!" : "Save"}
//     </button>
