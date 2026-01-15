import { useState, useRef, useEffect } from 'react';
import type { Song } from '../types/Song';

type MusicPlayerProps = {
  song: Song | null;
  onClose: () => void;
};

const Player = ({ song, onClose }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, song]);

  // Detectar tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Detectar clic fuera del player
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (audioRef.current) {
      const total = audioRef.current.duration;
      audioRef.current.currentTime = (value / 100) * total;
      setProgress(value);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return !song ? null : (
  <div
    ref={containerRef}
    className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-t border-gray-700 z-50"
  >
    <audio
      ref={audioRef}
      src={song.audio}
      onTimeUpdate={handleTimeUpdate}
      autoPlay
    />

    <div className="flex items-center gap-4">
      <img src={song.image} alt={song.title} className="w-12 h-12 rounded object-cover" />
      <div>
        <h4 className="text-sm font-semibold">{song.title}</h4>
        <p className="text-xs text-gray-400">{song.artist}</p>
      </div>
    </div>

    <div className="flex items-center gap-4 flex-grow mx-6">
      <input
        type="range"
        min={0}
        max={100}
        value={progress}
        onChange={handleSliderChange}
        className="w-full accent-red-500"
      />
    </div>

    <div className="flex items-center gap-4">
      <button
        onClick={togglePlay}
        className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg
          border-gray-700 border-b-[4px]
          hover:bg-black hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  </div>
);
};

export default Player;
