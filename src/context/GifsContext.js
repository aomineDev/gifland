import { createContext, useState } from 'react'

const GifsContext = createContext()

export function GifsContextProvider ({ children }) {
  const [gifs, setGifs] = useState([])
  const [lib, setLib] = useState({})

  const value = {
    gifs,
    setGifs,
    lib,
    setLib
  }

  return (
    <GifsContext.Provider value={value}>
      {children}
    </GifsContext.Provider>
  )
}

export default GifsContext