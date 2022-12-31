import { createContext, useEffect, useState } from 'react'
import { supabase } from '../utilities/supabaseClient'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setUser(data.session.user)
      }
    }
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{
      user
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
