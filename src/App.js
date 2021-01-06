import { lazy, Suspense } from 'react'
import { Route } from 'wouter'

import Header from './components/layout/Header'

import './assets/css/layout/App.css'

const Home = lazy(() => import('./pages/Home'))
const Details = lazy(() => import('./pages/Details'))
const Search = lazy(() => import('./pages/Search'))

function App () {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={null}>
        <Route path='/' component={Home} />
        <Route path='/details/:id' component={Details} />
        <Route path='/search/:query' component={Search} />
      </Suspense>
    </div>
  )
}

export default App
