import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Player from './components/Player';
import type { Song } from './types/Song';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import Favorites from './pages/Favorites';

function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar solo aquí */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Contenido */}
      <div className="flex-grow overflow-auto px-6 py-4">
        <Routes>
          {/* Pasamos searchTerm y onSongClick a Home */}
          <Route
            path="/"
            element={
              <Home searchTerm={searchTerm} onSongClick={setSelectedSong} />
            }
          />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="/favorites/:artist" element={<Favorites />} />
        </Routes>
      </div>

      {/* Player al final */}
      {selectedSong && (
        <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  );
}

export default App;
