import useGifs from '../hooks/useGifs'

import Container from '../components/layout/Container'

import Hero from '../components/layout/Hero'
import Title from '../components/Title/index'
import ListOfGifs from '../components/ListOfGifs'

export default function Home () {
  const { gifs } = useGifs({
    type: 'trending',
    limit: 16
  })

  return (
    <section className="Home">
      <Hero />
      <Container>
        <Title title="Trending" />
        <ListOfGifs gifs={gifs} />
      </Container>
    </section>
  )
}
