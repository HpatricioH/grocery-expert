import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { supabase } from '../utilities/supabaseClient'

const PublicRoutes = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()

        if (data.session) return navigate('/home')
        if (data.session === null) return navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
    getSession()
  }, [])

  return (
    <>
      <div style={{ margin: '0 0 4.5rem' }}>
        <Outlet />
      </div>
    </>
  )
}
export default PublicRoutes
