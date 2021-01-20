import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signUp } from 'services/auth'

import Button from 'components/shared/Button'

import './styles.css'

export default function RegisterForm () {
  function validateFields (values) {
    const errors = {}
    if (!values.username) errors.username = 'username is required.'

    if (!values.password) {
      errors.password = 'password is required.'
    } else if (values.password.length < 3) {
      errors.password = 'Length must be greater than 3'
    }

    return errors
  }

  function handleSubmit (values, { setFieldError }) {
    return signUp(values)
    .catch(err => {
      setFieldError('username', 'username is taken.')
    })
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validate={validateFields}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="c-register-form" autoComplete="off">
          <h2 className="c-register-title">Register</h2>
          <Field
            type="text"
            name="username"
            className="c-register-input"
            placeholder="Username"
          />
          <ErrorMessage
            className="c-register-error-message"
            name="username"
            component="p"
          />
          <Field
            type="password"
            name="password"
            className="c-register-input"
            placeholder="Password"
          />
          <ErrorMessage
            className="c-register-error-message"
            name="password"
            component="p"
          />
          <Button
            type="submit"
            isLoading={formik.isSubmitting}
            isDisabled={!formik.isValid}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )  
}
