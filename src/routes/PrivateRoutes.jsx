import loadable from '@loadable/component'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { GroceriesProvider } from '../context/GroceriesListContext'
import { supabase } from '../utilities/supabaseClient'

const BottomNav = loadable(() => import('../Components/BottomNav/BottomNav'))
const NavBar = loadable(() => import('../Components/NavBar/NavBar'))

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
        <GroceriesProvider>
          <div style={{ margin: '0 0 4.5rem' }}>
            <Outlet />
          </div>
          <BottomNav />
        </GroceriesProvider>
      </>
      )
}
export default PrivateRoutes
