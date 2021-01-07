import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

import Header from './components/layout/Header'

import './assets/css/layout/App.css'

const Home = lazy(() => import('./pages/Home'))
const Details = lazy(() => import('./pages/Details'))
const Search = lazy(() => import('./pages/Search'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App () {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/details/:id' component={Details} />
          <Route path='/search/:query' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
