import useGifs from '../hooks/useGifs'

import Container from '../components/layout/Container'
import Title from '../components/Title/index'
import ListOfGifs from '../components/ListOfGifs'

import Ab from './tst1'
import Abc from './test2'
export default function Search ({ params }) {
  const { query } = params

  const { gifs } = useGifs({
    type: 'search',
    query,
    limit: 8
  })
  
  return (
    <section>
      <Container withHeader withTop>
        <Ab />
        <Abc />
        <Title title={`Resultados de '${query}'`} />
        <ListOfGifs gifs={gifs} />
      </Container>
    </section>
  )
}
