import { lazy, Suspense } from 'react'

import useNearScreen from 'hooks/useNearScreen'

import Loader from 'components/shared/Loader'

const TrendingTerms = lazy(() => import('./TrendingTerms'))

export default function LazyTrendingterms () {
  const [isNearScreen, elementRef] = useNearScreen()

  return (
    <Suspense fallback={<Loader isLoading />}>
      <div ref={elementRef}>
        {isNearScreen ? <TrendingTerms /> : <Loader isLoading />}
      </div>
    </Suspense>
  )
}