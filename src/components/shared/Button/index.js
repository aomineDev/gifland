import './styles.css'

export default function Button ({ children, handleClick, isDisabled }) {
  return (
    <button
      className='btn'
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
