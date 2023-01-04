import { createContext, useMemo, useState } from 'react'
import { auth } from '../utilities/auth'
import { supabase } from '../utilities/supabaseClient'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [logoutError, setLogoutError] = useState('')

  // make login request and navigate to private route if success
  const handleLogin = async (email, password, navigate) => {
    const token = await auth(email, password)
    if (token.error === null) {
      navigate('/home')
    }
    if (token.error) return token.error.message
  }

  // logout request and navigate user to login page
  const handleLogOut = async (navigate) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setLogoutError(error)
    }
    navigate('/')
  }

  // retrieve user session if logged in
  const getSession = async (navigate) => {
    const { data } = await supabase.auth.getSession()

    // navigate user back to login if no session
    if (!data.session) return navigate('/')
    return data.session.user
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
