import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export const auth = () => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // console.log(supabase.auth.onAuthStateChange((event, session) => {

  // }))

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setIsAuthenticated(true)
      // supabase.auth.onAuthStateChange((event, session) => {
      //   console.log(event)
      //   console.log(session)
      // })
    }
    fetchUser()
  }, [])
  return { user, isAuthenticated }
}
