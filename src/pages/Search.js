import { Helmet } from 'react-helmet'

import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'
import TrendingTerms from 'components/TrendingTerms'
import Loader from 'components/shared/Loader'

import 'assets/css/layout/Search.css'

export default function Search ({ params }) {
  const { query, rating } = params

  const { gifs, isLoading, isNextPageLoading, isFull, setNewReq } = useGifs({ query, rating })

  const result = decodeURI(query)

  const title = `Resultados de '${result}'`

  function handleClick () {
    setNewReq(prevReq => prevReq + 1)
  }

  return (
    <>
      <Helmet>
        <title>{`${title} | Gifland`}</title>
        <meta
          name="description"
          content={title}
        />
      </Helmet>

      <div className="Search">
        <Container withHeader withTop>
          <Title>{title}</Title>
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
                <button onClick={handleClick} className="next-page-btn">Load More</button>
              </div>
            )
          }
          <TrendingTerms />
        </Container>
      </div>
    </>
  )
}
