import HomePage from "./assets/pages/home-page";
import GameListPage from "./assets/pages/game-list-page";
import { BrowserRouter, Routes, Route } from "react-router";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gamelist' element={<GameListPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
