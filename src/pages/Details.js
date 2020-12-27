import { useState, useEffect } from 'react'

import { getGif } from '../services/gifs'

import Container from '../components/layout/Container'

export default function Details ({ params }) {
  const [gif, setGif] = useState({})
  const { id } = params

  useEffect(() => {
    getGif({ id })
      .then(setGif)
  }, [id])

  if (!gif.id) return <p>Loading...</p>

  return (
    <section>
      <Container withHeader withTop>
        <img src={gif.url} alt={gif.alt} />
      </Container>
    </section>
  )
}