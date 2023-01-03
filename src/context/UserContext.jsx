import { createContext, useMemo, useState } from 'react'
import { auth } from '../utilities/auth'
import { supabase } from '../utilities/supabaseClient'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [logoutError, setLogoutError] = useState('')

  const handleLogin = async (email, password, navigate) => {
    const token = await auth(email, password)
    if (token.error === null) {
      navigate('/home')
    }
  }

  const handleLogOut = async (navigate) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setLogoutError(error)
    }
    navigate('/')
  }

  const getSession = async () => {
    const { data } = await supabase.auth.getSession()
    return data
  }

  const value = useMemo(() => ({
    handleLogin,
    handleLogOut,
    logoutError,
    getSession
  }), [])

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
