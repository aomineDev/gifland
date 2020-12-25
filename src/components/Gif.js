export default function Gif ({ url, title }) {
  return (
    <div>
      <img
        src={url}
        alt={title}
      />
    </div>
  )
}