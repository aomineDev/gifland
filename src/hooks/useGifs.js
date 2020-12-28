import { useState, useEffect } from 'react'
import { getGifs } from '../services/gifs'

export default function useGifs ({ type, query, limit }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    if (gifs.length) setGifs([])

    getGifs({ type, query, limit})
      .then(setGifs)
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps

  return { gifs }
}