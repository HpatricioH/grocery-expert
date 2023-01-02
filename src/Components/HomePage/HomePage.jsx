import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import { supabase } from '../../utilities/supabaseClient'

export const HomePage = () => {
  const { setUser, user } = useContext(UserContext)
  const [messageError, setMessageError] = useState('')
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setMessageError(error)
    }
    navigate('/')
    setUser(null)
  }

  return (
    <>
      <div>Home Page for user </div>
      <button onClick={handleLogout}>logout</button>

    </>
  )
}
