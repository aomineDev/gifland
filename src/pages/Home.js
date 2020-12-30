import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/layout/Hero'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'
import TrendingTerms from 'components/TrendingTerms'

export default function Home () {
  const { gifs } = useGifs({
    type: 'trending',
    limit: 16
  })

  return (
    <div className="Home">
      <Hero />
      <Container>
        <Title>Trending Gifs</Title>
        <ListOfGifs gifs={gifs} />
        <TrendingTerms />
      </Container>
    </div>
  )
}
