import { Link } from 'wouter'

export default function Gif ({ id, url, title }) {
  return (
    <div>
      <Link to={`/details/${id}`}>
        <img
          src={url}
          alt={title}
          title={title}
        />
      </Link>
    </div>
  )
}