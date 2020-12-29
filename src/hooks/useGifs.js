import { useEffect, useContext } from 'react'

import GifsContext from '../context/GifsContext'

import { getGifs } from '../services/gifs'

export default function useGifs ({ type, query, limit }) {
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    if (gifs.length) setGifs([])

    getGifs({ type, query, limit})
      .then(setGifs)
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps

  return { gifs }
}