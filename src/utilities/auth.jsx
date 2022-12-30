import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export const auth = () => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setIsAuthenticated(true)
    }
    fetchUser()
  }, [])
  return { user, isAuthenticated }
}
