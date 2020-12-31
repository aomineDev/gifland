import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ distance = 100 } = {}) {
  const [show, setShow] = useState(false)
  const elRef = useRef()

  useEffect(() => {
    function onChange (entries, observer) {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)
        // observer.unobserve(el)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: `${distance}px`
    })

    observer.observe(elRef.current)

    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [show, elRef]
}
