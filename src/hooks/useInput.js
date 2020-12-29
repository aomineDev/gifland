import { useState } from 'react'

export default function useInput (initialValue) {
  const [input, setInput] = useState(initialValue)
  console.log('input', input)
  function onChange (e) {
    setInput(e.target.value)
  }

  return [input, onChange]
}