import { Helmet } from 'react-helmet'
import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/layout/Hero'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'

export default function Home () {
  const { gifs, isLoading } = useGifs({ type: 'trending' })
 
  return (
    <>
      <Helmet>
        <title>Home | Gifland</title>
        <meta
          name="description"
          content="Web site by search any gifs"
        />
      </Helmet>

      <div className='Home'>
        <Hero />
        <Container>
          <Title>Trending Gifs</Title>
          <ListOfGifs
            gifs={gifs}
            isLoading={isLoading}
            useGrid
            masonryRow
          />
        </Container>
      </div>
    </>
  )
}
