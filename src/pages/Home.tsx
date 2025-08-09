import { useEffect, useState } from 'react';
// @ts-expect-error no types
import { musicService } from '../services/music/service';
import SongList from '../components/SongList';
import type { Song } from '../types/Song';

type HomeProps = {
  searchTerm: string;
  onSongClick: (song: Song) => void;
};

export default function Home({ searchTerm, onSongClick }: HomeProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSongs() {
      try {
        setLoading(true);
        let data: Song[];
        if (searchTerm.trim()) {
          data = await musicService.searchSongs(searchTerm);
        } else {
          data = await musicService.getAllSongs();
        }
        setSongs(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchSongs();
  }, [searchTerm]);

  return (
    <main className="flex-grow overflow-auto px-6 py-4">
      {loading && <p>Cargando canciones...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <SongList songs={songs} onSongClick={onSongClick} />
      )}
    </main>
  );
}
