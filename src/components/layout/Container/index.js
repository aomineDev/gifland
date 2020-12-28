import './styles.css'

export default function Container ({ children, withTop, withHeader, withoutCenter }) {
  let HeaderClassName = 'Container'

  if (withTop) HeaderClassName += ' top'

  if (withHeader) HeaderClassName += ' header'

  if (withoutCenter) HeaderClassName += ' without-center'

  return (
    <div className={HeaderClassName}>
      {children}
    </div>
  )
}