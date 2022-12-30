import './App.css'

import { CssBaseline } from '@mui/material'
import { UserProvider } from './context/UserContext'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { PublicRoutes } from './routes/PublicRoutes'
import { auth } from './utilities/auth'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { SignUp } from './Pages/SignUp/SignUp'

function App () {
  // TODO: add private routes and set up context API
  const { isAuthenticated, user } = auth()

  console.log(user)
  return (
    <>
      <CssBaseline />
      <Routes>

        {user
          ? <Route path='/home' element={<Home />} />
          : <Route path='/' element={<Login />} />}
        {/* <Route path='*' element={<Login />} /> */}
      </Routes>
      {/* <UserProvider value={{ isAuthenticated }}>
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </UserProvider> */}

    </>
  )
}

export default App
