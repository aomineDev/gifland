import { useFormik } from 'formik'

import { signUp } from 'services/auth'

import Button from 'components/shared/Button'

import './styles.css'

export default function RegisterForm () {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: values => {
      const errors = {}
      if (!values.username) errors.username = 'username is required.'

      if (!values.password) {
        errors.password = 'password is required.'
      } else if (values.password.length < 3) {
        errors.password = 'Length must be greater than 3'
      }

      return errors
    },
    onSubmit: (values, { setFieldError }) => {
      return signUp(values)
        .catch(err => {
          setFieldError('username', 'username is taken.')
        })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="c-register-form" autoComplete="off">
      <h2 className="c-register-title">Register</h2>
      <input type="text" name="username" onChange={formik.handleChange}  className="c-register-input" />
      {formik.errors.username && <p className="c-register-error-message">{formik.errors.username}</p>}
      <input type="password" name="password" onChange={formik.handleChange}  className="c-register-input" />
      {formik.errors.password && <p className="c-register-error-message">{formik.errors.password}</p>}
      <Button
        type="submit"
        isLoading={formik.isSubmitting}
      >
        Register
      </Button>
    </form>
  )  
}
