import { useState, useEffect } from 'react'

import { getGif } from '../services/gifs'

import Container from '../components/layout/Container'
import Loader from '../components/shared/Loader'
import Profile from '../components/Profile'

import '../assets/css/layout/Details.css'

export default function Details ({ params }) {
  const [gif, setGif] = useState({})
  const { id } = params

  useEffect(() => {
    getGif({ id })
      .then(setGif)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!gif.url) {
    return (
      <Container withHeader>
        <Loader />
      </Container>
    )
  }
  
  return (
    <section className="Details">
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
    </section>
  )
}