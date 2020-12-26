import { Link, Route } from 'wouter'

import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'

function App () {
  return (
    <div className="App">
      <nav>
        <Link to='/search/aomine'>Gifs de aomine</Link>
        <Link to='/search/zero two '>Gifs de zero two </Link>
        <Link to='/search/kurumi'>Gifs de kurumi</Link>
      </nav>

      <Route path='/' component={Home} />
      <Route path='/details/:id' component={Details} />
      <Route path='/search/:query' component={Search} />
    </div>
  )
}

export default App
