import { lazy, Suspense } from 'react'
import { HeadProvider, Title } from 'react-head'
import { Route, Switch } from 'wouter'

import Header from 'components/layout/Header'

const Home = lazy(() => import('pages/Home'))
const Details = lazy(() => import('pages/Details'))
const Search = lazy(() => import('pages/Search'))
const NotFound = lazy(() => import('pages/NotFound'))

function App () {
  return (
    <HeadProvider>
      <Title>Gifland</Title>
      <Header />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/details/:id' component={Details} />
          <Route path='/search/:query/:rating?' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </HeadProvider>
  )
}

export default App
