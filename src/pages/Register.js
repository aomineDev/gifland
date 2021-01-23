import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import { Title } from 'react-head'

import { signUp } from 'services/auth'

import Container from 'components/layout/Container'
import Button from 'components/shared/Button'

export default function Register () {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, errors } = useForm()
  const [location, setLocation] = useLocation() // eslint-disable-line no-unused-vars

  function onRegister (data) {
    setIsSubmitting(true)

    signUp(data)
      .then(() => setLocation('/'))
      .catch(() => setIsSubmitting(false))
  }

  return (
    <>
      <Title>Register | Gifland</Title>

      <Container center fullHeight>
        <form className="c-form" onSubmit={handleSubmit(onRegister)} autoComplete="off">
          <h2 className="c-form-title">Register with react hook form</h2>
          <input
            type="text"
            placeholder="Username"
            className="c-form-input"
            name="username"
            ref={register({ required: 'This field is required.' })}
            disabled={isSubmitting}
          />
          {errors.username && <p className="c-form-error-message">{errors.username.message}</p>}
          <input
            type="password"
            placeholder="Password"
            className="c-form-input"
            name="password"
            ref={register({ required: 'This field is required.', minLength: 4 })}
            disabled={isSubmitting}
          />
          {errors.password && <p className="c-form-error-message">{errors.password.message}</p>}
          {errors.password?.type === 'minLength' && <p className="c-form-error-message">Length must be greater than 3.</p>}
          <Button 
            type="submit" 
            isLoading={isSubmitting}
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  )
}
