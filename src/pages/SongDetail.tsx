import { useParams } from 'react-router-dom';
import { useSongById } from '../hooks/useSongs';

export default function SongDetail() {
  // Obtener el id del parámetro de la URL (como string)
  const { id } = useParams<{ id: string }>();

  // Usar el hook para obtener la canción por id
  const { song, loading, error } = useSongById(id);

  if (loading) return <p>Cargando canción...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!song) return <p>Canción no encontrada</p>;

  return (
    <div>
      <h2>{song.title}</h2>
      <p><strong>Artista:</strong> {song.artist}</p>
      <p><strong>Álbum:</strong> {song.title}</p>
      <p><strong>Género:</strong> {song.category}</p>
      <p><strong>Rating:</strong> {song.audio}</p>
      <p><strong>Descripción:</strong> {song.image}</p>
    </div>
  );
}
