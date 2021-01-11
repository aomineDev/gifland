import { memo } from 'react'

import './styles.css'

function SectionTitle ({ children }) {
  return (
    <h2 className="Title">{children}</h2>
  )
}

export default memo(SectionTitle)
