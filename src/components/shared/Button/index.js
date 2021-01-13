import './styles.css'

export default function Button ({ children, handleClick, isDisabled }) {
  let buttonClassName = 'btn'

  if (isDisabled) buttonClassName += ' disabled'

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
