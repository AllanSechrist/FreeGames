import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const Carousel = () => {
  const { randomGame } = useGameList();
  return (
    <div className="carousel carousel-center rounded-box w-full">
      {/* {GameList.map((game) => {
        <div className="carousel-item w-full">
          <GameCard game={game}/>
        </div>
      } )} */}
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center"
      >
        <GameCard game={randomGame} />
      </div>
      <div id="slide2" className="carousel-item w-full flex justify-center">
        <GameCard game={randomGame} />
      </div>
      <div id="slide3" className="carousel-item w-full flex justify-center">
        <GameCard game={randomGame} />
        <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-xl btn-outline btn-info btn-square">
            ❮
          </a>
          <a href="#slide2" className="btn btn-xl btn-outline btn-info btn-square">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
