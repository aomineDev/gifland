import { useEffect } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import { Title, Meta } from 'react-head'
import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/Hero'
import SectionTitle from 'components/SectionTitle'
import ListOfGifs from 'components/ListOfGifs'
import Loader from 'components/shared/Loader'

export default function Home () {
  const { gifs, isLoading, isNextPageLoading, setNewReq } = useGifs({ type: 'trending' })
  const [isNearScreen, elRef] = useNearScreen({ distance: 200 })

  useEffect(() => {
    if (isNearScreen) setNewReq(prevReq => prevReq + 1)
  }, [isNearScreen]) // eslint-disable-line react-hooks/exhaustive-deps
 
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
          <Loader isLoading={isNextPageLoading} />
          <div className='infinite-scroll' ref={elRef}></div>
        </Container>
      </div>
    </>
  )
}
