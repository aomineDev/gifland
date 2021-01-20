import { Title } from 'react-head'

import RegisterForm from 'components/RegisterForm'

import 'assets/css/layout/Register.css'

export default function Register () {
  return (
    <div className="Register">
      <Title>Register | Gifland</Title>

      <RegisterForm />
    </div>      
  )
}
