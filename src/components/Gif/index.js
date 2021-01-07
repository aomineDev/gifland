import { memo } from 'react'
import { Link } from 'wouter'

import './styles.css'

function Gif ({ id, url, title }) {
  return (
    <figure className='Gif'>
      <Link to={`/details/${id}`}>
        <img
          src={url}
          alt={title}
          title={title}
        />
      </Link>
    </figure>
  )
}

export default memo(Gif)
