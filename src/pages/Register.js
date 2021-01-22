import { Title } from 'react-head'

// import { useForm } from 'react-hook-form'

import Container from 'components/layout/Container'
import Button from 'components/shared/Button'

export default function Register () {
  return (
    <>
      <Title>Register | Gifland</Title>

      <Container center fullHeight>
        <form className="c-form">
          <h2 className="c-form-title">Register with react hook form</h2>
          <input type="text" className="c-form-input" />
          <input type="password" className="c-form-input" />
          <Button type="submit">Register</Button>
        </form>
      </Container>
    </>
  )
}
