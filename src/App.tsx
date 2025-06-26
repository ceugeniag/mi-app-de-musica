import { useState } from "react";
import Navbar from './components/Navbar';
import SongCategoryCard from './components/SongCategoryCard';
import SongList from './components/SongList';
import Player from './components/Player';
import type { Song } from './data/songs';
import { recommendedSongs, topHits, favoriteSongs, classicSongs } from './data/songs';

function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar canciones por nombre
  const filterSongs = (songs: Song[]) =>
    songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
<h1 className="text-red-500 text-2xl">Tailwind ahora sí anda 🔥</h1>

      <div className="flex-grow overflow-auto px-6 py-4">
        <SongCategoryCard title="🎧 Mis Recomendadas">
          <SongList songs={filterSongs(recommendedSongs)} onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🔥 Lo más escuchado">
          <SongList songs={filterSongs(topHits)} onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🆕 Modo fan">
          <SongList songs={filterSongs(favoriteSongs)}  onSongClick={setSelectedSong} />
        </SongCategoryCard>

        <SongCategoryCard title="🎸 Mis clásicos">
          <SongList songs={filterSongs(classicSongs)}  onSongClick={setSelectedSong} />
        </SongCategoryCard>
      </div>

{selectedSong && (
  <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
  )}
    </div>
  );
}

export default App;
