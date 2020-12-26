import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import ListOfGifs from '../components/ListOfgifs'

import '../App.css'

export default function Search ({ params }) {
  const [gifs, setGifs] = useState([])
  const { query } = params

  useEffect(() => {
    getGifs({ query, limit: 5 })
      .then(setGifs)
  }, [query])

  return <ListOfGifs gifs={gifs} />
}
