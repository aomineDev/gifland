import { useState, useEffect } from 'react'

import useInput from 'hooks/useInput'
import useAuth from 'hooks/useAuth'

import Button from 'components/shared/Button'

export default function Login ({ onLogin }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const [errors, setErrors] = useState({})

  const { isLogged, login, isLoading, hasError, setHasError } = useAuth()
  const [username, setUsername] = useInput(null)
  const [password, setPassword] = useInput(null)

  useEffect(() => {
    if (isLogged) onLogin && onLogin()
  }, [isLogged]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (hasError) setHasError(false)
    const isValid = Object.keys(errors).length ? false : true

    if (!isValid) setErrors({})

    if (username !== null && !username) setErrors(errors => ({ ...errors, username: 'username is required' }))
    if (password !== null && !password) setErrors(errors => ({ ...errors, password: 'password is required' }))
  }, [username, password]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isValid = Object.keys(errors).length ? false : true

    if (isValid) setIsDisabled(false)
    else setIsDisabled(true)
  }, [errors])

  function handleSubmit (e) {
    e.preventDefault()

    if (!username) setErrors(errors => ({ ...errors, username: 'username is required' }))
    if (!password) setErrors(errors => ({ ...errors, password: 'password is required' }))
    if (!username || !password) return

    const credentials = { username, password }

    login(credentials)
      .then(() => console.log('se ejecuta aunque exista un error'))
  }

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <h2 className="c-form-title">Log In</h2>
      <input
        type="text"
        className="c-form-input"
        placeholder="Username"
        onChange={setUsername}
        disabled={isLoading}
      />
      {errors.username && <p className="c-form-error-message">{errors.username}</p>}
      <input
        type="password"
        className="c-form-input"
        placeholder="Password"
        onChange={setPassword}
        disabled={isLoading}
      />
      {errors.password && <p className="c-form-error-message">{errors.password}</p>}
      {hasError && <p className="c-form-error-message">Incorrect Credentials</p>}
      <Button
        isDisabled={isDisabled}
        isLoading={isLoading}
        type="submit"
      >
        Login
      </Button>
    </form>
  )
}
