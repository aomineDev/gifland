import { memo } from 'react'

import './styles.css'

function Title ({ children }) {
  return (
    <h2 className="Title">{children}</h2>
  )
}

export default memo(Title)
