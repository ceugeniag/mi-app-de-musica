import SongCard from "./SongCard";
import type { Song } from "../types/Song";


type SongListProps = {
  songs: Song[];
  onSongClick?: (song: Song) => void;
};

const SongList = ({ songs }: SongListProps) => {
  return (
    <div className="flex gap-5 flex-wrap justify-start">
      {songs.map((song) => (
<SongCard
  key={song.id}
  id={song.id}
  title={song.title}
  artist={song.artist}
  cover={song.cover}
  genre={song.genre.join(', ')}
  onClick={() => {}}
/>

      ))}
    </div>
  );
};

export default SongList;
