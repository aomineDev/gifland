import { Route } from 'wouter'
import StaticContext from './context/StaticContext'
import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'

import Header from './components/layout/Header'

import './assets/css/layout/App.css'

function App () {
  const initialValue = {
    name: 'aomine dev'
  }

  return (
    <StaticContext.Provider value={initialValue}>
      <div className="App">
        <Header />
        <Route path='/' component={Home} />
        <Route path='/details/:id' component={Details} />
        <Route path='/search/:query' component={Search} />
      </div>
    </StaticContext.Provider>
  )
}

export default App
