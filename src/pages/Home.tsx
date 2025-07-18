import Navbar from '../components/Navbar';
import SongCategoryCard from '../components/SongCategoryCard';
import SongList from '../components/SongList';
import Player from '../components/Player';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recommendedSongs, topHits, favoriteSongs, classicSongs } from '../data/songs';
import type { Song } from '../data/songs';

const Home = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filterSongs = (songs: Song[]) =>
    songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="flex-grow overflow-auto px-6 py-4">
        
        {/* 🔗 Botones de categorías */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            to="/category/recommended"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            🎧 Recomendadas
          </Link>
          <Link
            to="/category/top"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            🔥 Lo más escuchado
          </Link>
          <Link
            to="/category/favorites"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            🆕 Modo fan
          </Link>
          <Link
            to="/category/classics"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            🎸 Clásicos
          </Link>
        </div>

        {/* 🎵 Categorías de canciones */}
        <SongCategoryCard title="🎧 Mis Recomendadas">
          <SongList songs={filterSongs(recommendedSongs)} onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🔥 Lo más escuchado">
          <SongList songs={filterSongs(topHits)} onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🆕 Modo fan">
          <SongList songs={filterSongs(favoriteSongs)} onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🎸 Mis clásicos">
          <SongList songs={filterSongs(classicSongs)} onSongClick={setSelectedSong} />
        </SongCategoryCard>
      </div>

      {selectedSong && <Player song={selectedSong} onClose={() => setSelectedSong(null)} />}
    </div>
  );
};

export default Home;
