import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { supabase } from '../utilities/supabaseClient'

export const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session === null) return navigate('/')

      // loading state to false when data is received
      if (data) return setLoading(false)
    }
    getSession()
  }, [])

  return loading ? <div>...loading</div> : <Outlet />
}
