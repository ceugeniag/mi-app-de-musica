// pages/Favorites.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";
import Player from "../components/Player";
import { favoriteSongs } from "../data/songs";
import type { Song } from "../data/songs";

const Favorites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const filteredSongs = favoriteSongs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex-grow overflow-auto px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">🎯 Tus favoritas</h2>
        <SongList songs={filteredSongs} onSongClick={setSelectedSong} />
      </div>
      {selectedSong && (
        <Player song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  );
};

export default Favorites;
