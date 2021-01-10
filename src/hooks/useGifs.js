import { useState, useEffect, useContext } from 'react'

import GifsContext from 'context/GifsContext'

import { getGifs } from 'services/gifs'

export default function useGifs ({ type, query, limit, rating }) {
  const [isNextPageLoading, setIsNextPageLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFull, setIsFull] = useState(false)
  const [newReq, setNewReq] = useState(0)
  const [page, setPage] = useState(0)

  const { gifs, setGifs, lib, setLib } = useContext(GifsContext)

  const key = `${query}-${rating || 'g'}`

  useEffect(() => {
    isLoading || setIsLoading(true)

    isFull && setIsFull(false)
    newReq && setNewReq(0)

    if (gifs.length) {
      if (key in lib) {
        setGifs(lib[key].gifs)
        setPage(lib[key].page)
        
        setIsLoading(false)
        return
      } else {
        page && setPage(0)
        setGifs([])
      }
    }

    getGifs({ type, query, limit, rating })
      .then(newGifs => {
        setGifs(newGifs)
        
        if (!query) return

        const newLib = { ...lib }
        
        newLib[key] = {
          gifs: newGifs,
          page: 0          
        }
        
        setLib(newLib)
      })
      .finally(() => setIsLoading(false))
  }, [query, rating]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!newReq) return
    if (isFull) return
    if (!gifs.length) return
    if (isNextPageLoading) return

    setPage(prevPage => prevPage + 1)
  }, [newReq]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!page) return

    if (lib[key]?.page === page) return

    setIsNextPageLoading(true)

    getGifs({ type, query, limit, rating, page })
      .then(newGifs => {
        if (!newGifs.length) return setIsFull(true)
 
        setGifs(prevGifs => prevGifs.concat(newGifs))
         
        if (!query) return

        const prevGifs = lib[key].gifs
        const newLib = { ...lib }

        newLib[key] = {
          gifs: prevGifs.concat(newGifs),
          page
        }
        
        setLib(newLib)
      })
      .finally(() => setIsNextPageLoading(false))
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  return { gifs, isLoading, isNextPageLoading, isFull, setNewReq }
}
