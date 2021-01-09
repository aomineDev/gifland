import Gif from 'components/Gif'
import Loader from 'components/shared/Loader'

import './styles.css'

export default function ListOfGifs ({ gifs, isLoading, useColumns, useGrid, masonryRow, masonryCol, squares
}) {
  let gifsClassName = 'Gifs '

  if (useColumns) gifsClassName += 'columns '
  if (useGrid) gifsClassName += 'grid '
  if (masonryRow) gifsClassName += 'masonry-row '
  if (masonryCol) gifsClassName += 'masonry-col '
  if (squares) gifsClassName += 'squares'

  if (isLoading) return <Loader isLoading />

  return (
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
  )
} 
