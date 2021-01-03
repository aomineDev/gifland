import { useState, useEffect, useContext } from 'react'

import GifsContext from 'context/GifsContext'

import { getGifs } from 'services/gifs'

export default function useGifs ({ type, query, limit }) {
  const [isNextPageLoading, setIsNextPageLoading] = useState(false)
  const [newReq, setNewReq] = useState(0)
  const [isFull, setIsFull] = useState(false)
  const [page, setPage] = useState(0)

  const { gifs, setGifs, lib, setLib } = useContext(GifsContext)

  useEffect(() => {
    setIsFull(false)
    setNewReq(0)

    if (gifs.length) {
      if (query in lib) {
        setGifs(lib[query].gifs)
        setPage(lib[query].page)
        return
      } else {
        setPage(0)
        setGifs([])
      }
    }

    getGifs({ type, query, limit })
      .then(newGifs => {
        setGifs(newGifs)
        
        if (!query) return
        const newLib = { ...lib }
        
        newLib[query] = {
          gifs: newGifs,
          page: 0          
        }
        
        setLib(newLib)
      })
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!newReq) return
    if (isFull) return
    if (!gifs.length) return
    if (isNextPageLoading) return

    setPage(prevPage => prevPage + 1)
  }, [newReq]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!page) return

    if (lib[query]?.page === page) return

    setIsNextPageLoading(true)

    getGifs({ type, query, limit, page })
      .then(newGifs => {
        if (!newGifs.length) return setIsFull(true)
 
        setGifs(prevGifs => prevGifs.concat(newGifs))
         
        if (!query) return
        const prevGifs = lib[query].gifs
        const newLib = { ...lib }

        newLib[query] = {
          gifs: prevGifs.concat(newGifs),
          page
        }
        
        setLib(newLib)
      })
      .finally(() => setIsNextPageLoading(false))
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  return { gifs, isNextPageLoading, isFull, setNewReq }
}