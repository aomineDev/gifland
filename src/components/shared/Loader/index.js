import './styles.css'

export default function Loader ({ isLoading }) {
  if (!isLoading) return null

  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  )
}