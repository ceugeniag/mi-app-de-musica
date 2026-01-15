export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  duration: number;
  rating: number;
  cover: string;
  audio?: string;
  description: string;
}
