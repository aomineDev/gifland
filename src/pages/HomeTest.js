import { Title, Meta } from 'react-head'
import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/Hero'
import SectionTitle from 'components/SectionTitle'
import ListOfGifs from 'components/ListOfGifs'

export default function Home () {
  const { gifs, isLoading } = useGifs({ type: 'trending' })
 
  return (
    <>
      <Title>Home | Gifland</Title>
      <Meta name='description' content='Web site by search any gifs' />

      <div className='Home'>
        <Hero />
        <Container withSpace>
          <SectionTitle>Trending Gifs</SectionTitle>
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
