type SongProps = {
  title: string;
  artist: string;
  duration: string;
  image: string;
  onClick?: () => void;
};

const SongCard = ({ title, artist, duration, image, onClick }: SongProps) => {
  return (
<div
  onClick={onClick}
  className="bg-gray-800 rounded-lg overflow-hidden w-36 flex flex-col shadow hover:shadow-lg transition duration-300 cursor-pointer"
>
<img src={image} alt={title} className="w-36 h-36 object-cover !important" /> 
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
        <p className="text-gray-400 text-sm truncate">{artist}</p>
        <p className="text-gray-500 text-xs mt-auto">{duration}</p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // evita que también se dispare el click del card
            onClick?.();
          }}
          className="mt-3 bg-green-500 hover:bg-green-600 text-white rounded-md py-1 text-center text-sm"
        >
          ▶️ Play
        </button>
      </div>
    </div>
  );
};

export default SongCard;
