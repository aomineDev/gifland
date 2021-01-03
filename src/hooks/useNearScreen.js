import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ distance = 0, threshold = 0, once = false } = {}) {
  const [show, setShow] = useState(false)
  const elRef = useRef()

  useEffect(() => {
    function onChange (entries, observer) {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)

        if (once) observer.unobserve(el.target)
      } else {
        setShow(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: `${distance}px`,
      threshold
    })

    observer.observe(elRef.current)

    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [show, elRef]
}
