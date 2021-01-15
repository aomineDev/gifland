import { useContext } from 'react'

import GifsContext from 'context/GifsContext'

export default function useGifsContext ({ readonly = true } = {}) {
  const { gifs, setGifs, lib, setLib } = useContext(GifsContext)

  if (!readonly) return { gifs, setGifs, lib, setLib }

  return { gifs }
}