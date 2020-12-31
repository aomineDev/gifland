import Gif from 'components/Gif'
import Loader from 'components/shared/Loader'

import './styles.css'

export default function ListOfGifs ({ gifs }) {
  if (!gifs.length) return <Loader isLoading />

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
