import { useContext } from 'react'

import UserContext from 'context/UserContext'

export default function useUserContext ({ readonly = true } = {}) {
  const { user, setUser } = useContext(UserContext)
  const { profile, favs } = user

  if (!readonly) return { profile, favs, setUser }

  return { profile, favs }
}
