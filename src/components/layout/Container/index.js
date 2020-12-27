import './styles.css'

export default function Container ({ children, withTop, withHeader }) {
  let HeaderClassName = 'Container'

  if (withTop) HeaderClassName += ' top'

  if (withHeader) HeaderClassName += ' header'

  return (
    <div className={HeaderClassName}>
      {children}
    </div>
  )
}