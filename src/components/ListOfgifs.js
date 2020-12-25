import Gif from './Gif'

export default function ListOfGifs ({ gifs }) {
  if (!gifs.length) return <p>Loading...</p>
  return (
    <>
    <h1>Gifs Perrones</h1>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          url={url}
          title={title}
        />
      ))}
    </>
  )
}