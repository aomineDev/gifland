import './styles.css'

export default function Button ({ children, type, handleClick, isLoading, isDisabled }) {
  let btnClassName = 'btn'

  if (isLoading) btnClassName += ' loading'

  return (
    <button
      className={btnClassName}
      onClick={handleClick}
      disabled={isDisabled}
      type={type || 'button'}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
