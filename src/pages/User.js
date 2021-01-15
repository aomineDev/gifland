import { Title } from 'react-head'

import useAuth from 'hooks/useAuth'

import Profile from 'components/Profile'

export default function User () {
  const { user } = useAuth()

  return (
    <>
      <Title>{user.username} | Gifland</Title>

      <Profile user={user} />
    </>
  )
}
