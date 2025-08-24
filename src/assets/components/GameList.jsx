import GameCard from "./GameCard";

const GameList = ({ games }) => {
  return (
    <>
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </>
  );
};

export default GameList;
