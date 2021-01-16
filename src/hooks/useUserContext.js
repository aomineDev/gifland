import { useContext } from 'react'

import UserContext from 'context/UserContext'

export default function useUserContext ({ readonly = true } = {}) {
  const { profile, favs, updateProfile, updateFavs } = useContext(UserContext)

  if (!readonly) return { profile, favs, updateProfile, updateFavs }

  return { profile, favs }
}
