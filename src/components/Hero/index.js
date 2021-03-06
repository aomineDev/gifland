import { memo } from 'react'
import { useLocation } from 'wouter'

import useSearchEngine from './hook'

import './styles.css'

const RATINGS = [ 'g', 'pg', 'pg-13', 'r']

function Hero () {
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars
  const { query, setQuery, rating, setRating, times } = useSearchEngine()

  function handleSubmit (e) {
    e.preventDefault()

    if (!query) return

    setLocation(`/search/${query}/${rating}`)
  }

  function handleInputChange (e) {
    setQuery(e.target.value)
  }

  function handleRatingChange (e) {
    setRating(e.target.value)
  }

  return (
    <>
      <section className="Hero">
        <div className="Hero-wrapper">
          <h1 className="Hero-title">Gifland</h1>
          <p className="Hero-text">
            Bienvenido a la tierra de los gifs.
            <br />
            Aqui podras encontrar gifs de todo lo que desees.
          </p>
          <form onSubmit={handleSubmit} className='Hero-form'>
            <input
              type="search"
              placeholder="Search a Gif here..."
              className="Hero-search"
              onChange={handleInputChange}
            />
            <select value={rating} onChange={handleRatingChange} className='Hero-select'>
              {RATINGS.map(e => <option key={e} value={e} className='Hero-select-option'>{e}</option>)}
            </select>
          </form>
          <p className='Hero-times'>query change times: {times}</p>
        </div>
      </section>
      <div className="Hero-bottom-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path fill="#000" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,117.3C384,107,480,53,576,74.7C672,96,768,192,864,218.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </>
  )
}

export default memo(Hero)
