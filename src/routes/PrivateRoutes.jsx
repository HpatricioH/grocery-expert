import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export const PrivateRoutes = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    user ? <Outlet /> : navigate('/')
  )
}
