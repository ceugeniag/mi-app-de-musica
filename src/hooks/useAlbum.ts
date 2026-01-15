import { useQuery } from '@tanstack/react-query'
// @ts-expect-error no types
import { getAlbumById } from '../services/music/service'

export const useAlbum = (id: string) => {
  return useQuery({
    queryKey: ['album', id],
    queryFn: () => getAlbumById(id)
  })
}
