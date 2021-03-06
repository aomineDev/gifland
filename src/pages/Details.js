import { Redirect } from 'wouter'
import { Title, Meta } from 'react-head'

import useGif from 'hooks/useGif'

import Container from 'components/layout/Container'
import Loader from 'components/shared/Loader'
import Profile from 'components/Profile'

import 'assets/css/layout/Details.css'

export default function Details ({ params }) {
  const { id } = params

  const { gif, isLoading, hasError } = useGif({ id })

  if (isLoading) {
    return (
      <>
        <Title>Details | Gifland</Title>
        
        <Container withHeader>
          <Loader isLoading />
        </Container>
      </>
    )
  }

  if (hasError) return <Redirect to='/404' />
  
  return (
    <>
      <Title>{gif.title} | Gifland</Title>
      <Meta name='description' content='gif.title' />

      <div className="Details">
        <Profile user={gif.user} />
        <Container  withTop={!gif.user} withHeader={!gif.user}>
          <div className="Details-gif-wrapper">
            <div className="Details-gif">
              <img src={gif.url} alt={gif.title} />
            </div>
            <h2 className="Details-gif-title">{gif.title}</h2>
            <p className="Details-gif-datetime">{gif.dateTime}</p>
          </div>
        </Container>
      </div>
    </>
  )
}
