import { memo } from 'react'
import { Link } from 'wouter'

import Fav from 'components/Fav'

import './styles.css'

function Gif ({ id, url, title }) {
  return (
    <figure className='Gif'>
      <Fav id={id} />
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
