import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import ListOfGifs from '../components/ListOfGifs'

import '../App.css'

export default function Search ({ params }) {
  const [gifs, setGifs] = useState([])
  const { query } = params

  useEffect(() => {
    getGifs({ query, limit: 10 })
      .then(setGifs)
  }, [query])

  return <ListOfGifs gifs={gifs} />
}
