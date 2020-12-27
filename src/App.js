import { Route } from 'wouter'

import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'

import Header from './components/layout/Header'

function App () {
  return (
    <div className="App">
      <Header />
      <Route path='/' component={Home} />
      <Route path='/details/:id' component={Details} />
      <Route path='/search/:query' component={Search} />
    </div>
  )
}

export default App
