import { Title } from 'react-head'
import { Redirect } from 'wouter'

import useAuth from 'hooks/useAuth'
import useUserContext from 'hooks/useUserContext'

import Profile from 'components/Profile'

export default function User () {
  const { isLogged } = useAuth()
  const { profile } = useUserContext()

  if (!isLogged) return <Redirect to="/login" />

  return (
    <>
      <Title>{profile.username} | Gifland</Title>

      <Profile user={profile} />
    </>
  )
}
