import HomePage from "./assets/pages/home-page";
import GameListPage from "./assets/pages/game-list-page";
import NavBar from "./assets/components/navigation/Navbar";
import Footer from "./assets/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
const App = () => {
  return (
    <div className="min-h-screen bg-base-300 p-6">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamelist" element={<GameListPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
