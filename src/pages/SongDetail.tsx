import { useParams } from 'react-router-dom';
import { useSongById } from '../hooks/useSongs';

export default function SongDetail() {
  const { id } = useParams<{ id: string }>();
  const { song, loading, error } = useSongById(id);

  if (loading) return <p className="text-white p-4">Cargando canción...</p>;
  if (error) return <p className="text-red-500 p-4">Error: {error}</p>;
  if (!song) return <p className="text-white p-4">Canción no encontrada</p>;

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8 text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={song.cover}
          alt={song.title}
          className="w-full md:w-64 rounded-lg object-cover"
        />

        <div className="flex flex-col flex-grow">
          <h2 className="text-3xl font-bold mb-2">{song.title}</h2>
          <p className="text-gray-400 mb-1"><strong>Artista:</strong> {song.artist}</p>
          <p className="text-gray-400 mb-1"><strong>Álbum:</strong> {song.album}</p>
          <p className="text-gray-400 mb-1"><strong>Año:</strong> {song.year}</p>
          <p className="text-gray-400 mb-1">
            <strong>Géneros:</strong> {song.genre.join(', ')}
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Duración:</strong> {formatDuration(song.duration)}
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Calificación:</strong> {song.rating}/10
          </p>
          <p className="mb-4 text-gray-300">{song.description}</p>

          {song.audio && (
            <audio controls className="w-full rounded bg-black">
              <source src={song.audio} type="audio/mpeg" />
              Tu navegador no soporta reproducción de audio.
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
