import { useState, useLayoutEffect } from 'react'
import { Link } from 'wouter'

import Container from '../Container'

import './styles.css'

export default function Header () {
  const [isActive, setIsActive] = useState(false)

  const headerClassName = `Header ${isActive ? 'active' : ''}`

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll () {
    if (window.scrollY !== 0) setIsActive(true)

    if (window.scrollY === 0) setIsActive(false)
  }

  return (
    <header className={headerClassName}>
      <Container>
        <Link to='/' className="Header-title">Gifland</Link>
      </Container>
    </header>
  )
}