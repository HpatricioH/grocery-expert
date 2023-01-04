import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true)
  const { getSession } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    getSession(navigate).then((result) => {
      if (result) return setLoading(false)
    })
  }, [])

  return loading ? null : <Outlet />
}
