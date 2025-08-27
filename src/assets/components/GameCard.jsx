import { useLocation } from "react-router";
import SaveButton from "./buttons/SaveButton";
import DeleteButton from "./buttons/DeleteButton";

const GameCard = ({ game }) => {
  const {pathname} = useLocation();
  const isGameListPage = pathname === '/gamelist';
  return (
    <div className="card bg-base-100 w-90 shadow-sm">
      <figure>
        <img src={game.thumbnail} alt={game.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 items-baseline text-sm">
          <p>{game.platform}</p>
          <p className="text-right">{game.developer}</p>
          <p>{game.release_date}</p>
          <p className="text-right">{game.genre}</p>
        </div>
        <div className="card-actions justify-end">
          {isGameListPage ? <DeleteButton /> : <SaveButton game={game} />}
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
