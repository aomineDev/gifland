import { Helmet } from 'react-helmet'

import Container from 'components/layout/Container'

export default function NotFound () {
  return (
    <>
      <Helmet>
        <title>Not Found | Gifland</title>
      </Helmet>

      <Container withHeader withTop>
        <h1>Error 404 :(</h1>
      </Container>
    </>
  )
}
