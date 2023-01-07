import './App.css'
import { CssBaseline } from '@mui/material'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { SignUp } from './Pages/SignUp/SignUp'
import { UserProvider } from './context/UserContext'
import React from 'react'

function App () {
  return (
    <UserProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/home' element={<PrivateRoutes />}>
            <Route path='/home' element={<Home />} exact />
          </Route>
        </Routes>
      </BrowserRouter>

    </UserProvider>
  )
}

export default App
