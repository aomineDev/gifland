import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'

import Hero from 'components/layout/Hero'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'
import TrendingTerms from 'components/TrendingTerms'

import Loader from 'components/shared/Loader'

import 'assets/css/layout/Home.css'

export default function Home () {
  const { gifs, isNextPageLoading, setPage } = useGifs({
    type: 'trending',
    limit: 16
  })

  function handleClick () {
    setPage(prevPage => prevPage + 1)
  }
 
  return (
    <div className="Home">
      <Hero />
      <Container>
        <Title>Trending Gifs</Title>
        <ListOfGifs gifs={gifs} />
        <Loader isLoading={isNextPageLoading} />
        <div className="next-page-btn-wrapper">
          <button onClick={handleClick} className="next-page-btn">Next Page</button>
        </div>
        <TrendingTerms />
      </Container>
    </div>
  )
}
