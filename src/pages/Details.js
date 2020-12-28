import { useState, useEffect } from 'react'

import { getGif } from '../services/gifs'

import Container from '../components/layout/Container'
import Loader from '../components/shared/Loader'
import Verified from '../components/Verified'

import '../assets/css/layout/Details.css'

export default function Details ({ params }) {
  const [gif, setGif] = useState({})
  const { id } = params

  const bannerUrl = 'https://images.unsplash.com/photo-1607879891122-cbdb343ca383?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=60'

  useEffect(() => {
    getGif({ id })
      .then(setGif)
  }, [id])

  if (!gif.url) {
    return (
      <Container withHeader>
        <Loader />
      </Container>
    )
  }
  
  return (
    <section className="Details">
      {
        gif.user && (
          <Container withHeader withoutCenter>
            <div className="User-banner">
              <img src={gif.user.banner_url || bannerUrl} alt="banner avatar"/>
            </div>
          </Container>
        )
      }

      <Container withTop={!gif.user} withHeader={!gif.user}>
        {
          gif.user && (
            <div className="User">
              <div className="User-avatar">
                <img src={gif.user.avatar_url} alt="user avatar"/>
              </div>
              <div className="User-info">
                <a
                  href={gif.user.profile_url}
                  target="_blank"
                  rel="noreferrer"
                  className="User-display-name"
                >
                  {gif.user.display_name}
                </a>
                <div className="User-name-box">
                  <span className="User-name">@{gif.user.username}</span>
                  <Verified isVerified={gif.user.is_verified} />
                </div>
              </div>
            </div>
          )
        }
        
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