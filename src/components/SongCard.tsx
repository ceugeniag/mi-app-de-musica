type SongProps = {
  title: string;
  artist: string;
  duration: string;
  image: string;
};

const SongCard = ({ title, artist, duration, image }: SongProps) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "8px",
      width: "200px"
    }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{duration}</p>
      <button>▶️ Play</button>
    </div>
  );
};

export default SongCard;
