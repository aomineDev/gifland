import { useState, useEffect, useContext } from 'react'

import GifsContext from 'context/GifsContext'

import { getGif } from 'services/gifs'
  
export default function useGif ({ id }) {
  const { gifs } = useContext(GifsContext)

  const [gif, setGif] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!id) return setIsError(true)

    setIsLoading(true)

    if (gifs.length) {
      const gifFromCache = gifs.find(gif => gif.id === id)

      setGif(gifFromCache)
      setIsLoading(false)
    }

    getGif({ id })
      .then(setGif)
      .catch(err => {
        console.error(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { gif, isLoading, isError }
}
