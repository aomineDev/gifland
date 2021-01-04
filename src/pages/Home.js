import { useEffect } from 'react'
import useNearScreen from 'hooks/useNearScreen'


import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/layout/Hero'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'
import Loader from 'components/shared/Loader'

export default function Home () {
  const { gifs, isNextPageLoading, setNewReq } = useGifs({ type: 'trending' })
  const [isNearScreen, elRef] = useNearScreen({ distance: 100 })

  useEffect(() => {
    if (isNearScreen) setNewReq(prevReq => prevReq + 1)
  }, [isNearScreen]) // eslint-disable-line react-hooks/exhaustive-deps
 
  return (
    <div className="Home">
      <Hero />
      <Container>
        <Title>Trending Gifs</Title>
        <ListOfGifs gifs={gifs} useGrid squares />
        <Loader isLoading={isNextPageLoading} />
        <div className="infinite-scroll" ref={elRef}></div>
      </Container>
    </div>
  )
}
