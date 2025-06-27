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
  className="bg-gray-800 rounded-lg overflow-hidden w-40 flex flex-col shadow hover:shadow-lg transition duration-300 cursor-pointer"
>
<img src={image} alt={title} className="w-40 h-36 object-cover !important" /> 
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
        <p className="text-gray-400 text-sm truncate">{artist}</p>
        <p className="text-gray-500 text-xs mt-auto">{duration}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className="cursor-pointer transition-all bg-gray-800 text-gray-100 px-6 py-2 rounded-lg
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
