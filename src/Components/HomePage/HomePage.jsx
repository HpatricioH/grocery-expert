import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'

const HomePage = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()

      setUser(data?.session?.user ?? null)
    }
    getSession()
  }, [])

  return user === null
    ? <div>...Loading</div>
    : (
      <>
        <div>Home Page for user {user?.email} </div>

      </>
      )
}

export default HomePage
