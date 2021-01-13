import { useState } from 'react'
import { Title } from 'react-head'
import { useLocation } from 'wouter'

import { login } from 'services/auth'

import useInput from 'hooks/useInput'

import Button from 'components/shared/Button'

import 'assets/css/layout/Login.css'

export default function Login () {
  const [isDisabled, setIsDisabled] = useState(false)

  const [username, setUsername] = useInput('')
  const [password, setPassword] = useInput('')

  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars

  function handleSubmit (e) {
    e.preventDefault()
    setIsDisabled(true)

    const credentials = { username, password }

    login(credentials)
      .then(() => setLocation('/'))
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
