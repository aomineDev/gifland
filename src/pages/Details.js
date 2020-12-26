import { useState, useEffect } from 'react'

import { getGif } from '../services/gifs'

export default function Details ({ params }) {
  const [gif, setGif] = useState({})
  const { id } = params
  useEffect(() => {
    getGif({ id })
      .then(setGif)
  }, [id])

  if (!gif.id) return <p>Loading...</p>

  return <img src={gif.url} alt={gif.alt} />
}