import { CreateContext, useState } from 'react'

const Context = CreateContext({})

export function GifContextProvider ({ children }) {
  const [gifs, setGifs] = useState({})

  return (
    <Context.Provider value={{ gifs, setGifs }}>
      {children}
    </Context.Provider>
  )
}

export default Context