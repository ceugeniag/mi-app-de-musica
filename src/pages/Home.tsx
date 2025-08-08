import { useAllSongs } from '../hooks/useSongs';
import SongList from '../components/SongList';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  const { songs, loading, error } = useAllSongs();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex-grow overflow-auto px-6 py-4">
        {loading && <p>Cargando canciones...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <SongList songs={filteredSongs} onSongClick={() => {}} />
        )}
      </main>
    </div>
  );
}
