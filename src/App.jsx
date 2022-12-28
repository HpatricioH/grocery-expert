import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { CssBaseline } from '@mui/material'
import { SignUp } from './Pages/SignUp/SignUp'
import { Home } from './Pages/Home/Home'

function App () {
  // TODO: add private routes and set up context API
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
