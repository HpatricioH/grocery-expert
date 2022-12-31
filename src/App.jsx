import './App.css'

import { CssBaseline } from '@mui/material'
import { UserProvider } from './context/UserContext'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { SignUp } from './Pages/SignUp/SignUp'

function App () {
  // TODO: add private routes and set up context API

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} exact />
            </Route>
            <Route path='/' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>

    </>
  )
}

export default App
