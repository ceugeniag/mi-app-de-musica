import SongCard from "./SongCard";
import type { Song } from "../data/songs";

type SongListProps = {
  songs: Song[];
  onSongClick?: (song: Song) => void;
};

const SongList = ({ songs, onSongClick }: SongListProps) => {
  return (
    <div className="flex gap-5 flex-wrap justify-start">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          {...song}
          onClick={() => onSongClick?.(song)}
        />
      ))}
    </div>
  );
};

export default SongList;
