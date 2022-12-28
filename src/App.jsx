import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { CssBaseline } from '@mui/material'

function App () {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
