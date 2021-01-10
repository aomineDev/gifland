import './styles.css'

export default function Loader ({ isLoading, fullHeight }) {
  let loaderClassName = 'loader '

  if (fullHeight) loaderClassName += 'full-height'

  if (!isLoading) return null

  return (
    <div className={loaderClassName}>
      <div className="spinner"></div>
    </div>
  )
}