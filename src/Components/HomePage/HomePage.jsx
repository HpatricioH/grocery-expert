import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const HomePage = () => {
  const { handleLogOut, getSession } = useAuth()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const handleClick = async () => {
    handleLogOut(navigate)
  }

  useEffect(() => {
    getSession().then((result) => {
      setUser(result)
    })
  }, [])

  return user === null
    ? null
    : (
      <>
        <div>Home Page for user {user?.email} </div>
        <button onClick={handleClick}>logout</button>

      </>
      )
}
