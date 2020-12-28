import { useLayoutEffect } from 'react'


export default function useScroll ({ handleScroll, isScrollEnable }) {
  useLayoutEffect(() => {
    if (!isScrollEnable) return

    const isBrowser = typeof window !== 'undefined'

    if (!isBrowser) return

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrollEnable]) // eslint-disable-line react-hooks/exhaustive-deps
}