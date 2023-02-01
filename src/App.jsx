import './App.css'
import { CssBaseline } from '@mui/material'
import PrivateRoutes from './routes/PrivateRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { SignUp } from './Pages/SignUp/SignUp'
import { UserProvider } from './context/UserContext'
import React from 'react'
import { PantryPage } from './Components/PantryPage/PantryPage'
import { RecipesPage } from './Components/RecipesPage/RecipesPage'
import { GroceriesList } from './Components/GroceriesList/GroceriesList'
import { IngredientRecipes } from './Components/IngredientRecipes/IngredientRecipes'
import { FavoritesPage } from './Components/FavoritesPage/FavoritesPage'

function App () {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} exact />
              <Route path='/pantry' element={<PantryPage />} />
              <Route path='/recipes' element={<RecipesPage />} />
              <Route path='/groceries' element={<GroceriesList />} />
              <Route path='/recipes/:id' element={<IngredientRecipes />} />
              <Route path='/favorites' element={<FavoritesPage />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>

  )
}

export default App
