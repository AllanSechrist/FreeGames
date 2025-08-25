const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col mb-4">
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
      <a href={`${game.game_url}`} target="_blank" className="text-blue-600 hover:text-blue-800 no-underline">Game Site</a>
    </div>
  );
};

export default GameCard;
