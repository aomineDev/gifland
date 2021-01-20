import { lazy, Suspense } from 'react'
import { HeadProvider, Title } from 'react-head'
import { Route, Switch } from 'wouter'

import Header from 'components/layout/Header'

const Home = lazy(() => import('pages/Home'))
const Details = lazy(() => import('pages/Details'))
const Search = lazy(() => import('pages/Search'))
const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))
const User = lazy(() => import('pages/User'))
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
          <Route path='/user' component={User} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </HeadProvider>
  )
}

export default App
