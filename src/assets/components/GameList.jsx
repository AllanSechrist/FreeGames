import GameCard from "./GameCard";

const GameList = ({games, emptyListMessage}) => {
  const gridClass = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
  const messageClass = "flex items-center justify-center text-4xl font-semibold"
  return (
    <>
      <div className={games.length ? gridClass : messageClass}>
        {games.length > 0
          ? games.map((game) => <GameCard key={game.id} game={game} />)
          : emptyListMessage}
      </div>
    </>
  );
};

export default GameList;
