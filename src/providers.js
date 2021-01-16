import { GifsContextProvider } from 'context/GifsContext'
import { AuthContextProvider } from 'context/AuthConext'
import { UserContextProvider } from 'context/UserContext'

export default function Providers ({ children }) {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <GifsContextProvider>
          {children}
        </GifsContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  )
}