import Gif from './Gif'

export default function ListOfGifs ({ gifs }) {
  return (
    <section>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          url={url}
          title={title}
        />
      ))}
    </section>
  )
}