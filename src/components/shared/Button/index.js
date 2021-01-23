import { Link, Btn } from './styles'

export default function Button ({ children, href, type, handleClick, isLoading, isDisabled }) {
  if (href) return <Link to={href}>{children}</Link>

  return (
    <Btn
      isLoading={isLoading}
      onClick={handleClick}
      disabled={isDisabled}
      type={type || 'button'}
    >
      {isLoading ? 'Loading...' : children}
    </Btn>
  )
}
