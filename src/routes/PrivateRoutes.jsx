import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BottomNav from '../Components/BottomNav/BottomNav'
import NavBar from '../Components/NavBar/NavBar'
import { supabase } from '../utilities/supabaseClient'

const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()
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
        <div style={{ margin: '0 0 4.5rem' }}>
          <Outlet />
        </div>
        <BottomNav />
      </>
      )
}
export default PrivateRoutes
