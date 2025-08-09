import { Link } from "react-router-dom";

type SongProps = {
  id: string | number;
  title: string;
  artist: string;
  cover: string;
  genre: string;
  onClick?: () => void;
};

const SongCard = ({ id, title, artist, cover, genre, onClick }: SongProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg overflow-hidden w-40 flex flex-col shadow hover:shadow-lg transition duration-300 cursor-pointer"
    >
      {/* Imagen con Link al detalle */}
      <Link to={`/song/${id}`}>
        <img src={cover} alt={title} className="w-40 h-36 object-cover" />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        {/* Título */}
        <Link to={`/song/${id}`}>
          <h3 className="text-white font-semibold text-lg truncate hover:underline">
            {title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm truncate">{artist}</p>
        <p className="text-gray-500 text-xs mt-1">{genre}</p>

        {/* Botón Play */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="mt-auto cursor-pointer transition-all bg-gray-800 text-gray-100 px-6 py-2 rounded-lg
            border-gray-700 border-b-[4px]
            hover:bg-black hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default SongCard;
