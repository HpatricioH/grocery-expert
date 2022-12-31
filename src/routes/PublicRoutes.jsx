import { Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login/Login'
import { SignUp } from '../Pages/SignUp/SignUp'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
  )
}
