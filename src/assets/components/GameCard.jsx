import DeleteButton from "./buttons/DeleteButton";
import SaveButton from "./buttons/SaveButton";
import { PiLinkThin } from "react-icons/pi";

const GameCard = ({ game, button = "save" }) => {
  return (
    <div className="card bg-base-100 w-90 h-116 shadow-sm">
      <figure>
        <img src={game.thumbnail} alt={game.title} />
      </figure>
      <div className="card-body h-50">
        <h2 className="card-title">{game.title}</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 items-baseline text-sm">
          <p>{game.platform}</p>
          <p className="text-right">{game.genre}</p>
        </div>
        <p className="line-clamp-6">{game.short_description}</p>
        <div className="card-actions justify-between items-center">
          <a
            href={game.game_url}
            className="link link-info link-hover"
            target="_blank"
          >
            <PiLinkThin className="text-3xl transition-transform duration-200 hover:scale-125" />
          </a>
          {button === "save" ? (
            <SaveButton game={game} />
          ) : (
            <DeleteButton id={game.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
// <div className="bg-white rounded-lg shadow p-4 flex flex-col mb-4">
//   <img src={game.thumbnail} alt="thumbnail" />
//   <div className="flex justify-between">
//     <h4 className="text-sm font-semibold">{game.title}</h4>
//     <h4 className="text-sm font-semibold">{game.platform}</h4>
//   </div>
//   <div className="flex justify-between">
//     <h4 className="text-sm font-semibold">{game.developer}</h4>
//     <h4 className="text-sm font-semibold">{game.release_date}</h4>
//   </div>
//   <p className="text-sm flex-grow">{game.short_description}</p>
//   <div className="flex justify-between">
//     <a href={`${game.game_url}`} target="_blank" className="text-blue-600 hover:text-blue-800 no-underline">Game Site</a>
//     <button
//       onClick={() => setSavedGames([...savedGames, game])}
//       disabled={savedGames.some(saved => saved.id === game.id)}
//       className={`bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow ${savedGames.some(saved => saved.id === game.id) && 'opacity-50 cursor-not-allowed'}`}
//     >
//       {savedGames.some(saved => saved.id === game.id) ? "Saved!" : "Save"}
//     </button>
//   </div>
// </div>
