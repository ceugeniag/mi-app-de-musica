
// pages/SongDetail.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import { recommendedSongs, topHits, favoriteSongs, classicSongs } from "../data/songs";
import type { Song } from "../data/songs";

const allSongs: Song[] = [
  ...recommendedSongs,
  ...topHits,
  ...favoriteSongs,
  ...classicSongs,
];

const SongDetail = () => {
  const { id } = useParams();
  const song = allSongs.find((s) => s.id === id);
  const [selectedSong, setSelectedSong] = useState<Song | null>(song ?? null);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      <div className="flex-grow overflow-auto px-6 py-4">
        {song ? (
          <div className="flex flex-col items-center text-center">
            <img
              src={song.image}
              alt={song.title}
              className="w-60 h-60 object-cover rounded mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{song.title}</h2>
            <p className="text-gray-400 text-lg mb-4">{song.artist}</p>
            <p className="text-sm text-gray-500">Duración: {song.duration}</p>
          </div>
        ) : (
          <p className="text-white">Canción no encontrada</p>
        )}
      </div>
      {selectedSong && (
        <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  );
};

export default SongDetail;