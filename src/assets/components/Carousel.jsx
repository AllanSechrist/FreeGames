import GameList from "./GameList";
import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const Carousel = () => {
  const { randomGame } = useGameList();
  return (
    <div className="carousel rounded-box w-64">
      {/* {GameList.map((game) => {
        <div className="carousel-item w-full">
          <GameCard game={game}/>
        </div>
      } )} */}
      <div id="slide1" className="carousel-item relative w-full">
        <GameCard game={randomGame} />
      </div>
      <div id="slide2" className="carousel-item w-full">
        <GameCard game={randomGame} />
      </div>
      <div id="slide3" className="carousel-item w-full">
        <GameCard game={randomGame} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
      </div>
    </div>
  );
};

export default Carousel;
