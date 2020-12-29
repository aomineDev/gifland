import { useState } from 'react'

export default function useInput (initialValue) {
  const [input, setInput] = useState(initialValue)

  function onChange (e) {
    setInput(e.target.value)
  }

  return [input, onChange]
}