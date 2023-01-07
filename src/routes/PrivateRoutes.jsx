import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavBar } from '../Components/NavBar/NavBar'
import { supabase } from '../utilities/supabaseClient'

export const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        // else navigate('/home)
        if (!data.session) return navigate('/')
        if (data) return setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getSession()
  }, [])

  return loading
    ? null
    : (
      <>
        <NavBar />
        <Outlet />
      </>
      )
}
