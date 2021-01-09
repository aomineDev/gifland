import { lazy, Suspense, memo } from 'react'

import useNearScreen from 'hooks/useNearScreen'

import Loader from 'components/shared/Loader'

const TrendingTerms = lazy(() => import('./TrendingTerms'))

function LazyTrendingterms () {
  const [isNearScreen, elementRef] = useNearScreen({ distance: 100, once: true })

  return (
    <Suspense fallback={<Loader isLoading />}>
      <div ref={elementRef} className="Trending-wrapper">
        {isNearScreen && <TrendingTerms />}
      </div>
    </Suspense>
  )
}

export default memo(LazyTrendingterms)
