import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'wouter'

import useInput from 'hooks/useInput'

import useScroll from 'hooks/useScroll'

import Container from 'components/layout/Container'
import AuthHeader from 'components/layout/AuthHeader'

import searchIcon from 'assets/icons/search.svg'
import timesIcon from 'assets/icons/times.svg'

import './styles.css'

export default function Header () {
  const [isActive, setIsActive] = useState(false)
  const [isSearchBarActive, setIsSearchBarActive] = useState(false)
  
  const [location, setLocation] = useLocation()
  const [query, setQuery] = useInput('')

  const isScrollEnable = location === '/'
  const headerEl = useRef()

  let headerClassName = 'Header '
  let headerFormClassName = 'Header-search-form '

  if (isActive) headerClassName += 'active'
  if (isSearchBarActive) headerFormClassName += 'active'

  useScroll({ handleScroll, isScrollEnable })

  useEffect(() => {
    if (!isScrollEnable) setIsActive(true)
    else if (window.scrollY === 0) setIsActive(false)
  }, [isScrollEnable])

  function handleScroll () {
    const cotainsActiveClassName = headerEl.current.classList.contains('active')
    const scrollPosition = window.scrollY
  
    if (scrollPosition && cotainsActiveClassName) return

    if (scrollPosition) return setIsActive(true)
    if (!scrollPosition) return setIsActive(false)
  }

  function handleSubmit (e) {
    e.preventDefault()

    if (!query) return
    
    const queryBackUp = query

    setQuery(e, { clear: true })

    setLocation(`/search/${queryBackUp}`)
  }

  function handleIconClick () {
    setIsSearchBarActive(!isSearchBarActive)
  }

  return (
    <header className={headerClassName} ref={headerEl}>
      <Container>
        <Link to='/' className="Header-title">Gifland</Link>
        <nav className="Header-nav">
          <div className="Header-search">
            <form onSubmit={handleSubmit} className={headerFormClassName}>
              <input
                type="search"
                placeholder="Search a Gif here..."
                className="Header-search-input"
                onChange={setQuery}
                value={query}
              />
              <button className="Header-search-btn" onClick={handleIconClick} type="button">
                <img src={timesIcon} alt="search"/>
              </button>
            </form>
            <button className="Header-search-btn" onClick={handleIconClick}>
              <img src={searchIcon} alt="search"/>
            </button>
          </div>
          <AuthHeader />
        </nav>
      </Container>
    </header>
  )
}