import { useState, useEffect, useContext } from 'react'

import GifsContext from 'context/GifsContext'

import { getGifs } from 'services/gifs'

export default function useGifs ({ type, query, limit }) {
  const [page, setPage] = useState(1)
  const [isNextPageLoading, setIsNextPageLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    if (gifs.length) setGifs([])

    getGifs({ type, query, limit })
      .then(setGifs)
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (page === 1) return

    setIsNextPageLoading(true)

    getGifs({ type, query, limit, page })
      .then(newGifs => {
        setGifs(prevGifs => prevGifs.concat(newGifs))
        setIsNextPageLoading(false)
      })
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  return { gifs, isNextPageLoading, setPage }
}