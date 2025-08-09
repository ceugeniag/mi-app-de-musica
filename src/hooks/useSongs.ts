// hooks/useSongs.ts
import { useState, useEffect } from 'react';
import type { Song } from '../types/Song';
// @ts-expect-error no types
import { musicService } from '../services/music/service';

// Hook para todas las canciones
export function useAllSongs() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        const data = await musicService.getAllSongs();
        setSongs(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return { songs, loading, error };
}

// Hook para canciones por género
export function useSongsByGenre(genre: string) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!genre) return;

    async function fetchSongs() {
      try {
        setLoading(true);
        const data = await musicService.getSongsByGenre(genre);
        setSongs(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchSongs();
  }, [genre]);

  return { songs, loading, error };
}
// Hook para canción por ID
export function useSongById(id: number | string | undefined) {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchSong() {
      try {
        setLoading(true);
        const data = await musicService.getSongById(id);
        setSong(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchSong();
  }, [id]);

  return { song, loading, error };
}

// Hook para canciones por artista (ej: favoritas)
export function useSongsByArtist(artist: string) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  if (!artist) {
    setSongs([]);
    setLoading(false);
    setError(null);
    return;
  }

    async function fetchSongs() {
      try {
        setLoading(true);
        const data = await musicService.getSongsByArtist(artist);
        setSongs(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchSongs();
  }, [artist]);

  return { songs, loading, error };
}
