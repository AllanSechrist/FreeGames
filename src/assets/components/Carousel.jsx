import GameCard from "./GameCard";
import { useGameList } from "../context/GameListContext";

const Carousel = () => {
  const { randomGame } = useGameList();
  return (
    <div className="w-135">
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
        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center"
        >
          <GameCard game={randomGame} />
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center"
        >
          <GameCard game={randomGame} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
