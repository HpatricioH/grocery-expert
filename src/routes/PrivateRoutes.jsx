import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoutes = () => {
  const { user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!user) {
      <Navigate to='/' state={{ from: location }} replace />
    }
  })

  return <Outlet />
}
