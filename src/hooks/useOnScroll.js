import { useLayoutEffect } from 'react'


export default function useOnScroll ({ handleScroll, isScrollEnable, deps = [] }) {
  useLayoutEffect(() => {
    if (!isScrollEnable) return

    const isBrowser = typeof window !== 'undefined'

    if (!isBrowser) return

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}