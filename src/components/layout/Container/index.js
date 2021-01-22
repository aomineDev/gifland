import './styles.css'

export default function Container ({ children, withTop, withHeader, withSpace, center, fullHeight }) {
  let HeaderClassName = 'Container'

  if (withTop) HeaderClassName += ' top'

  if (withHeader) HeaderClassName += ' header'

  if (withSpace) HeaderClassName += ' space'

  if (center) HeaderClassName += ' center'

  if (fullHeight) HeaderClassName += ' full-height'

  return (
    <div className={HeaderClassName}>
      {children}
    </div>
  )
}
