import { useState } from 'react'

export default function useInput (initialValue) {
  const [input, setInput] = useState(initialValue)

  function onChange (e, options) {
    if (options?.clear) return setInput('')

    setInput(e.target.value)
  }

  return [input, onChange]
}