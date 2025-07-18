import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";
import CategorySongs from "./pages/CategorySong";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/song/:id" element={<SongDetail />} />
      <Route path="/category/:id" element={<CategorySongs />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
  );
}

export default App;
