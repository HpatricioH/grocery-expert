import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const HomePage = () => {
  const { getSession } = useAuth()
  const [user, setUser] = useState(null)

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

      </>
      )
}
