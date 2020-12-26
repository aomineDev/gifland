import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import ListOfGifs from '../components/ListOfgifs'

import '../App.css'

export default function Home () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ query: 'mapache', limit: 5 })
      .then(setGifs)
  }, [])

  return (
    <div className='App'>
      <h1>Recompiling is fast now :D</h1>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}
