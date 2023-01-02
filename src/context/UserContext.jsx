import { createContext, useMemo, useState } from 'react'
import { auth } from '../utilities/auth'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const handleLogin = async (email, password, navigate) => {
    const token = await auth(email, password)
    if (token.error === null) {
      navigate('/home')
    }
    setUser(token)
  }

  const handleLogOut = async () => {
    setUser(null)
  }

  const value = useMemo(() => ({
    user,
    setUser,
    handleLogin,
    handleLogOut
  }), [user])

  return (
    <UserContext.Provider value={
      value
    }
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
