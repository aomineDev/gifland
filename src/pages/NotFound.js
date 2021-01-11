import { Title } from 'react-head'

import Container from 'components/layout/Container'

export default function NotFound () {
  return (
    <>
      <Title>Not Found | Gifland</Title>

      <Container withHeader withTop>
        <h1>Error 404 :(</h1>
      </Container>
    </>
  )
}
