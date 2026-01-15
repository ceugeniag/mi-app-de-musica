import { useParams } from 'react-router-dom';
import { useSongsByArtist } from '../hooks/useSongs';
import SongList from '../components/SongList';
import type { Song } from '../types/Song';

type FavoritesProps = {
  onSongClick: (song: Song) => void;
};

export default function Favorites({ onSongClick }: FavoritesProps) {
  const { artist } = useParams<{ artist: string }>();
  const { songs, loading, error } = useSongsByArtist(artist || '');

  return (
    <main className="flex-grow overflow-auto px-6 py-4 bg-black text-white min-h-screen">
      {loading && <p>Buscando canciones de "{artist}"...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <SongList songs={songs} onSongClick={onSongClick} />}
    </main>
  );
}
