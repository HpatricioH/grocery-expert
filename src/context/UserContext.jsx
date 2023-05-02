import { createContext, useEffect, useState } from 'react'
import { supabase } from '../utilities/supabaseClient'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [logoutError, setLogoutError] = useState('')
  const [user, setUser] = useState()

  // logout request and navigate user to login page
  const handleLogOut = async (navigate) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setLogoutError(error)
    }
    navigate('/login')
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })
  }, [])

  const value = {
    handleLogOut,
    logoutError,
    user,
    setUser
  }

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
