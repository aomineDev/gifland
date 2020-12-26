import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import ListOfGifs from '../components/ListOfgifs'

import '../App.css'

export default function Home () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ query: 'panda', limit: 5 })
      .then(setGifs)
  }, [])

  return <ListOfGifs gifs={gifs} />
}
