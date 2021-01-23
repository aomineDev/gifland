import { Formik, Form, Field, ErrorMessage } from 'formik'

import { signUp } from 'services/auth'

import Button from 'components/shared/Button'

const initialValues = {
  username: '',
  password: ''
}

export default function RegisterForm ({ onRegister }) {
  function validateFields (values) {
    const errors = {}

    if (!values.username) errors.username = 'username is required.'

    if (!values.password) {
      errors.password = 'password is required.'
    } else if (values.password.length <= 3) {
      errors.password = 'Length must be greater than 3.'
    }

    return errors
  }

  function handleSubmit (values, { setFieldError }) {
    return signUp(values)
      .then(() => onRegister && onRegister())
      .catch(err => {
        setFieldError('username', 'username is taken.')
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="c-form" autoComplete="off">
          <h2 className="c-form-title">Register by Formik</h2>
          <Field
            type="text"
            name="username"
            className="c-form-input"
            placeholder="Username"
            disabled={formik.isSubmitting}
          />
          <ErrorMessage
            className="c-form-error-message"
            name="username"
            component="p"
          />
          <Field
            type="password"
            name="password"
            className="c-form-input"
            placeholder="Password"
            disabled={formik.isSubmitting}
          />
          <ErrorMessage
            className="c-form-error-message"
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
