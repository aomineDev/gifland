import Gif from 'components/Gif'
import Loader from 'components/shared/Loader'

import './styles.css'

export default function ListOfGifs ({ gifs, useColumns, useGrid, masonry, squares
}) {
  let gifsClassName = 'Gifs '

  if (useColumns) gifsClassName += 'columns '
  if (useGrid) gifsClassName += 'grid '
  if (masonry) gifsClassName += 'masonry '
  if (squares) gifsClassName += 'squares'

  return (
    <>
      <Loader isLoading={!gifs.length} />
      <section className={gifsClassName}>
        {gifs.map(({ id, title, url }) => (
          <Gif
            key={id}
            id={id}
            url={url}
            title={title}
          />
        ))}
      </section>
    </>
    
  )
} 
