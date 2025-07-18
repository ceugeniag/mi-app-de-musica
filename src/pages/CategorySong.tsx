// pages/CategorySongs.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";
import Player from "../components/Player";
import { recommendedSongs, topHits, favoriteSongs, classicSongs } from "../data/songs";
import type { Song } from "../data/songs";

const categoriesMap: Record<string, { name: string; songs: Song[] }> = {
  recommended: { name: "🎧 Mis Recomendadas", songs: recommendedSongs },
  top: { name: "🔥 Lo más escuchado", songs: topHits },
  favorites: { name: "🆕 Modo fan", songs: favoriteSongs },
  classics: { name: "🎸 Mis clásicos", songs: classicSongs },
};

const CategorySongs = () => {
  const { id } = useParams();
  const category = id && categoriesMap[id];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  if (!category) {
    return <div className="text-white p-6">Categoría no encontrada</div>;
  }

  const filteredSongs = category.songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex-grow overflow-auto px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
        <SongList songs={filteredSongs} onSongClick={setSelectedSong} />
      </div>
      {selectedSong && (
        <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  );
};

export default CategorySongs;