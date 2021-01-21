import { useEffect } from 'react'
import { Title } from 'react-head'
import { useFormik } from 'formik'
import { useLocation } from 'wouter'

import { signIn } from 'services/auth'
import useAuthContext from 'hooks/useAuthContext'

import Button from 'components/shared/Button'

import 'assets/css/layout/Login.css'

export default function LoginPage () {
  const { updateToken, token } = useAuthContext({ readonly: false })
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars

  useEffect(() => {
    if (token) setLocation('/')
  }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    onSubmit
  })

  function validate (values) {
    const errors = {}

    if (!values.username) errors.username = 'username is required.'

    if (!values.password) {
      errors.password = 'password is required.'
    } else if (values.password.length <= 3) {
      errors.password = 'Length must be greater than 3'
    }

    return errors
  }

  function onSubmit (values, { setFieldError }) {
    return signIn(values)
      .then(data => {
        delete data.user.password
        
        updateToken(data)
      })
      .catch(err => {
        setFieldError('username', 'Incorrect Credentials.')
      })
  }

  return (
    <div className="Login">
      <Title>Login | Gifland</Title>

      <form onSubmit={formik.handleSubmit} className="c-form" autoComplete="off">
        <h2 className="c-form-title">Login by Formik</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange} 
          className="c-form-input"
        />
        {formik.errors.username && <p className="c-form-error-message">{formik.errors.username}</p>}
        <input 
          type="password" 
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          className="c-form-input"
        />
        {formik.errors.password && <p className="c-form-error-message">{formik.errors.password}</p>}
        <Button
          type="submit"
          isLoading={formik.isSubmitting}
          isDisabled={!formik.isValid}
        >
          Login
        </Button>
      </form>
    </div>
  )
}
