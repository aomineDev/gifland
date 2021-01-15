import { useState } from 'react'
import { Title } from 'react-head'
import { useLocation } from 'wouter'

import useInput from 'hooks/useInput'
import useAuth from 'hooks/useAuth'

import Button from 'components/shared/Button'

import 'assets/css/layout/Login.css'

export default function Login () {
  const [isDisabled, setIsDisabled] = useState(false)
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars

  const [username, setUsername] = useInput('')
  const [password, setPassword] = useInput('')

  const { login } = useAuth()

  function handleSubmit (e) {
    e.preventDefault()
    setIsDisabled(true)

    const credentials = { username, password }

    login(credentials)
      .then(() => setLocation('/'))
      .catch(err => console.error('[err] ' + err.message))
      .finally(() => setIsDisabled(false))
  }

  return (
    <>
      <Title>Login | Gifland</Title>

      <div className="Login">
        <form className="Login-form" onSubmit={handleSubmit}>
          <h2 className="Login-title">Log In</h2>
          <input
            type="text"
            className="Login-input"
            placeholder="Username"
            onChange={setUsername}
            disabled={isDisabled}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            onChange={setPassword}
            disabled={isDisabled}
          />
          <Button
            isDisabled={isDisabled}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  )
}
