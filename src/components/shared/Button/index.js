import './styles.css'

export default function Button ({ children, handleClick, isLoading, isDisabled }) {
  let btnClassName = 'btn'

  if (isLoading) btnClassName += ' loading'

  return (
    <button
      className={btnClassName}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
