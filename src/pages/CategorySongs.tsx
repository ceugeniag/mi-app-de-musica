import { useSongsByGenre } from '../hooks/useSongs';
import SongList from '../components/SongList';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategorySongs() {
  const { genre } = useParams<{ genre: string }>();
  const { songs, loading, error } = useSongsByGenre(genre || '');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtro adicional por búsqueda
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex-grow overflow-auto px-6 py-4">
        <h2 className="text-2xl mb-4">Género: {genre}</h2>
        {loading && <p>Cargando canciones...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <SongList songs={filteredSongs} onSongClick={() => {}} />
        )}
      </main>
    </div>
  );
}
