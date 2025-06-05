import type { Song } from "../data/songs";

type Props = {
  title: string;
  songs: Song[];
};

const SongCategoryCard = ({ title, songs }: Props) => {
  return (
    <div className="max-w-3xl bg-gray-800 rounded-xl shadow-lg shadow-black/50 p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-5 border-b border-gray-700 pb-2">{title}</h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <img
                src={song.image}
                alt={song.title}
                className="w-16 h-16 object-cover rounded-md shadow-md"
              />
              <div>
                <p className="text-lg font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-sm text-gray-500">{song.duration}</span>
              <button
                aria-label={`Play ${song.title}`}
                className="text-blue-400 hover:text-blue-500 transition font-semibold"
              >
                ▶️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongCategoryCard;
