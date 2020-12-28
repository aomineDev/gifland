import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'

import useOnScroll from '../../../hooks/useOnScroll'

import Container from '../Container'

import './styles.css'

import searchIcon from '../../../assets/icons/search.svg'
import timesIcon from '../../../assets/icons/times.svg'

export default function Header () {
  const [isActive, setIsActive] = useState(false)
  const [isSearchBarActive, setIsSearchBarActive] = useState(false)
  const [query, setQuery] = useState('')

  const [location, setLocation] = useLocation()

  const isScrollEnable = location === '/'

  useOnScroll({
    handleScroll,
    isScrollEnable,
    deps: [location] 
  })

  useEffect(() => {
    if (!isScrollEnable) setIsActive(true)
    else if (window.scrollY === 0) setIsActive(false)
  }, [isScrollEnable])

  const headerClassName = `Header ${isActive ? 'active' : ''}`

  const headerFormClassName = `Header-form ${isSearchBarActive ? 'active' : ''}`

  function handleScroll () {
    if (window.scrollY !== 0) return setIsActive(true)

    if (window.scrollY === 0) return setIsActive(false)
  }

  function handleChange (e) {
    setQuery(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    if (!query) return
    
    const queryBackUp = query

    setQuery('')

    setLocation(`/search/${queryBackUp}`)
  }

  function handleClick () {
    setIsSearchBarActive(!isSearchBarActive)
  }

  return (
    <header className={headerClassName}>
      <Container>
        <Link to='/' className="Header-title">Gifland</Link>
        <button className="Header-search-btn" onClick={handleClick}>
          <img src={searchIcon} alt="search"/>
        </button>
        <form onSubmit={handleSubmit} className={headerFormClassName}>
          <input
            type="search"
            placeholder="Search a Gif here..."
            className="Header-search"
            onChange={handleChange}
            value={query}
          />
          <button className="Header-search-btn" onClick={handleClick} type="button">
            <img src={timesIcon} alt="search"/>
          </button>
        </form>
      </Container>
    </header>
  )
}