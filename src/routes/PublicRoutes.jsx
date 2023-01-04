import { useEffect, useState } from 'react'
import { Navigate, Outlet, Route, useAsyncError, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Login } from '../Pages/Login/Login'
import { SignUp } from '../Pages/SignUp/SignUp'
import { supabase } from '../utilities/supabaseClient'

export const PublicRoutes = () => {
  const { getSession } = useAuth()
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const navigate = useNavigate()

  console.log(userLoggedIn)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data) {
        setUserLoggedIn(true)
      }
    }
    getSession()
  }, [])

  return <Outlet />
}
