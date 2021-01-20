import { Title } from 'react-head'

import LoginForm from 'components/LoginForm'

import 'assets/css/layout/Login.css'

export default function LoginPage () {
  return (
    <div className="Login">
      <Title>Login | Gifland</Title>

      <LoginForm />
    </div>
  )
}
