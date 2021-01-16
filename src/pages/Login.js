import { useState, useEffect } from 'react'
import { Title } from 'react-head'
import { useLocation } from 'wouter'

import useInput from 'hooks/useInput'
import useAuth from 'hooks/useAuth'

import Button from 'components/shared/Button'

import 'assets/css/layout/Login.css'

export default function Login () {
  const [isDisabled, setIsDisabled] = useState(true)

  const { isLogged, login, isLoading, hasError, setHasError } = useAuth()
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars
  const [username, setUsername] = useInput('')
  const [password, setPassword] = useInput('')

  useEffect(() => {
    if (isLogged && !hasError) setLocation('/')
  }, [isLogged]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (hasError) setHasError(false)

    if (username && password) setIsDisabled(false)
    else setIsDisabled(true)
  }, [username, password]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit (e) {
    e.preventDefault()

    if (!username || !password) return

    const credentials = { username, password }

    login(credentials)
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
            disabled={isLoading}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            onChange={setPassword}
            disabled={isLoading}
          />
          {hasError && <p className="Login-error-message">Credenciales incorrectas</p>}
          <Button
            isDisabled={isDisabled}
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  )
}
