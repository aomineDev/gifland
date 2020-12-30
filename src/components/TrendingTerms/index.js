import { useState, useEffect, useRef } from 'react'
import { Link } from 'wouter'

import { getTrendingTerms } from 'services/trending'

import Title from '../Title'

import './styles.css'

function TrendingTerms () {
  const [trendingTerms, setTrendingTerms] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrendingTerms)
  }, [])

  return (
    <section className="Trending">
      <Title>Trending Terms</Title>
      {trendingTerms.map((term, index) => (
        <Link
          to={`/search/${term}`}
          key={index}
          className="Trending-terms"
        >
          {term}
        </Link>
      ))}
    </section>
  )
}

export default function LazyTrendingterms () {
  const [show, setShow] = useState(false)
  const elRef = useRef()

  useEffect(() => {
    function onChange (entries, observer) {
      const el = entries[0]
      
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '500px'
    })

    observer.observe(elRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elRef}>
      {show && <TrendingTerms />}
    </div>
  )
}