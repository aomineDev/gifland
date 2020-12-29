import useGifs from '../hooks/useGifs'

import Container from '../components/layout/Container'
import Title from '../components/Title/index'
import ListOfGifs from '../components/ListOfGifs'

export default function Search ({ params }) {
  const { query } = params

  const { gifs } = useGifs({
    type: 'search',
    query,
    limit: 8
  })
  
  return (
    <section className="Search">
      <Container withHeader withTop>
        <Title title={`Resultados de '${query}'`} />
        <ListOfGifs gifs={gifs} />
      </Container>
    </section>
  )
}
