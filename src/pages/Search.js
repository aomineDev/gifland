import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import Container from '../components/layout/Container'
import Title from '../components/Title/index'
import ListOfGifs from '../components/ListOfGifs'

import '../App.css'

export default function Search ({ params }) {
  const [gifs, setGifs] = useState([])
  const { query } = params

  useEffect(() => {
    getGifs({ query, limit: 8 })
      .then(setGifs)
  }, [query])

  return (
    <section>
      <Container withHeader withTop>
        <Title title={`Resultados de '${query}'`} />
        <ListOfGifs gifs={gifs} />
      </Container>
    </section>
  )
}
