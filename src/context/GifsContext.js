import { createContext, useState } from 'react'

const GifsContext = createContext()

export function GifsContextProvider ({ children }) {
  const [gifs, setGifs] = useState([])

  const value = { gifs, setGifs }

  return (
    <GifsContext.Provider value={value}>
      {children}
    </GifsContext.Provider>
  )
}

export default GifsContext