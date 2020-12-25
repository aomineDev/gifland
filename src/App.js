import { useState, useEffect } from 'react'

import { getGifs } from './services/gifs'

import ListOfGifs from './components/ListOfgifs'

import './App.css'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ query: 'aomine', limit: 5 })
      .then(setGifs)
  }, [])

  return (
    <div className='App'>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}

export default App
