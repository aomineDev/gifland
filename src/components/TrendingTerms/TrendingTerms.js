import { useState, useEffect } from 'react'
import { Link } from 'wouter'

import { getTrendingTerms } from 'services/trending'

import SectionTitle from 'components/SectionTitle'

import './styles.css'

export default function TrendingTerms () {
  const [trendingTerms, setTrendingTerms] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrendingTerms)
  }, [])

  return (
    <section className="Trending">
      <SectionTitle>Trending Terms</SectionTitle>
      <nav>
        {trendingTerms.map((term, index) => (
          <Link
            to={`/search/${term}`}
            key={index}
            className="Trending-terms"
          >
            {term}
          </Link>
        ))}
      </nav>
    </section>
  )
}
