import { Title, Meta } from 'react-head'

import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'
import SectionTitle from 'components/SectionTitle'
import ListOfGifs from 'components/ListOfGifs'
import TrendingTerms from 'components/TrendingTerms'
import Button from 'components/shared/Button'
import Loader from 'components/shared/Loader'

import 'assets/css/layout/Search.css'

export default function Search ({ params }) {
  const { query, rating } = params

  const { gifs, isLoading, isNextPageLoading, isFull, setNewReq } = useGifs({ query, rating })

  const result = decodeURI(query)

  const title = `Resultados de '${result}'`

  function loadMore () {
    setNewReq(prevReq => prevReq + 1)
  }

  return (
    <>
      <Title>{title} | Gifland</Title>
      <Meta name="description" content={title} />

      <div className="Search">
        <Container withHeader withTop>
          <SectionTitle>{title}</SectionTitle>
          <ListOfGifs
            gifs={gifs}
            isLoading={isLoading}
            useGrid
            masonryRow
          />
          <Loader isLoading={isNextPageLoading} />
          {
            !isFull && (
              <div className="next-page-btn-wrapper">
                <Button handleClick={loadMore}>Load More</Button>
              </div>
            )
          }
          <TrendingTerms />
        </Container>
      </div>
    </>
  )
}
