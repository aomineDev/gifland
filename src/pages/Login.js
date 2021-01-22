import { useEffect } from 'react'
import { Title } from 'react-head'
import { useFormik } from 'formik'
import { useLocation } from 'wouter'

import useAuth from 'hooks/useAuth'

import Container from 'components/layout/Container'
import Button from 'components/shared/Button'

export default function LoginPage () {
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars
  const { isLogged, login } = useAuth()

  useEffect(() => {
    if (isLogged) setLocation('/')
  }, [isLogged]) // eslint-disable-line react-hooks/exhaustive-deps

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
    return login(values)
      .catch(err => {
        setFieldError('username', 'Incorrect Credentials.')
      })
  }

  return (
    <>
      <Title>Login | Gifland</Title>

      <Container center fullHeight>
        <form onSubmit={formik.handleSubmit} className="c-form" autoComplete="off">
          <h2 className="c-form-title">Login by Formik hooks</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="c-form-input"
            onChange={formik.handleChange}
            disabled={formik.isSubmitting}
          />
          {formik.errors.username && <p className="c-form-error-message">{formik.errors.username}</p>}
          <input 
            type="password" 
            name="password"
            placeholder="Password"
            className="c-form-input"
            onChange={formik.handleChange}
            disabled={formik.isSubmitting}
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
      </Container>
    </>
  )
}
