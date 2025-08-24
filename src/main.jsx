import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GameListProvider } from "./assets/context/GameListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameListProvider>
      <App />
    </GameListProvider>
  </StrictMode>
);
