import Gif from './Gif'

export default function ListOfGifs ({ gifs }) {
  if (!gifs.lenght) return <p>Loading...</p>

  return (
    <section>
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