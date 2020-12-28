import Gif from '../Gif'

import './styles.css'

export default function ListOfGifs ({ gifs }) {
  if (!gifs.length) return <p>Loading...</p>

  return (
    <section className='Gifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          id={id}
          url={url}
          title={title}
        />
      ))}
    </section>
  )
} 
