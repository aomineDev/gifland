import { GifsContextProvider } from 'context/GifsContext'
import { UserContextProvider } from 'context/UserContext'

export default function Providers ({ children }) {
  return (
    <UserContextProvider>
      <GifsContextProvider>
        {children}
      </GifsContextProvider>
    </UserContextProvider>
  )
}
