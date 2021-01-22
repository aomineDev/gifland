import { useState, useEffect } from 'react'

import useInput from 'hooks/useInput'
import useAuth from 'hooks/useAuth'

import Button from 'components/shared/Button'

export default function Login ({ onLogin }) {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [errors, setErrors] = useState({})

  const [username, setUsername] = useInput(null)
  const [password, setPassword] = useInput(null)
  const { login } = useAuth()

  useEffect(() => {
    if (!isValid) setErrors({})

    validate()
  }, [username, password]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isValid = Object.keys(errors).length ? false : true

    setIsValid(isValid)
  }, [errors])

  function validate ({ force = false } = {}) {
    const errors = {}

    if ((username !== null || force) && !username) errors.username = 'username is required'
    if ((password !== null || force) && !password) errors.password = 'password is required'

    const isValid = Object.keys(errors).length ? false : true

    setErrors(errors)

    return { errors, isValid }
  }

  function handleSubmit (e) {
    e.preventDefault()

    const { isValid } = validate({ force: true })
    
    if (!isValid) return

    setIsSubmiting(true)

    const credentials = { username, password }

    login(credentials)
      .then(() => onLogin && onLogin())
      .catch(err => {
        setErrors({ req: 'incorrect credentials.' })
        setIsSubmiting(false)
        console.error('[err] ' + err.message)
      })
  }

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <h2 className="c-form-title">Login</h2>
      <input
        type="text"
        className="c-form-input"
        placeholder="Username"
        onChange={setUsername}
        disabled={isSubmiting}
      />
      {errors.username && <p className="c-form-error-message">{errors.username}</p>}
      <input
        type="password"
        className="c-form-input"
        placeholder="Password"
        onChange={setPassword}
        disabled={isSubmiting}
      />
      {errors.password && <p className="c-form-error-message">{errors.password}</p>}
      {errors.req && <p className="c-form-error-message">{errors.req}</p>}
      <Button
        isDisabled={!isValid}
        isLoading={isSubmiting}
        type="submit"
      >
        Login
      </Button>
    </form>
  )
}
