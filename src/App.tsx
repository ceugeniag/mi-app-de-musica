import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import Favorites from './pages/Favorites';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex-grow overflow-auto px-6 py-4">
        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} onSongClick={setSelectedSong} />}
          />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="/favorites/:artist" element={<Favorites />} />
        </Routes>
      </div>

      {selectedSong && (
        <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  );
}

export default App;
