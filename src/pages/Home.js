import { useState, useEffect } from 'react'

import { getGifs } from '../services/gifs'

import Container from '../components/layout/Container'

import Hero from '../components/layout/Hero'
import Title from '../components/Title/index'
import ListOfGifs from '../components/ListOfGifs'

import '../App.css'

export default function Home () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ type: 'trending', limit: 16 })
      .then(setGifs)
  }, [])

  return (
    <section>
      <Hero />
      <Container>
        <Title title="Trending" />
        <ListOfGifs gifs={gifs} />
      </Container>
    </section>
  )
}
