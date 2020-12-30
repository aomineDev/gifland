import useGifs from 'hooks/useGifs'

import Container from 'components/layout/Container'
import Title from 'components/Title/index'
import ListOfGifs from 'components/ListOfGifs'

export default function Search ({ params }) {
  const { query } = params

  const { gifs } = useGifs({
    type: 'search',
    query,
    limit: 16
  })

  const result = decodeURI(query)
  
  return (
    <div className="Search">
      <Container withHeader withTop>
        <Title>Resultados de '{result}'</Title>
        <ListOfGifs gifs={gifs} />
      </Container>
    </div>
  )
}
