import React from 'react'
import UserContext from '../context/UserContext'

export const useAuth = () => {
  return React.useContext(UserContext)
}
