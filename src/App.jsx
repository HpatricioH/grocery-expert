import './App.css'
import { CssBaseline } from '@mui/material'
import PrivateRoutes from './routes/PrivateRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import React from 'react'
import { FavoritesPage } from './Components/FavoritesPage/FavoritesPage'
import { ProfilePage } from './Components/ProfilePage/ProfilePage'
import loadable from '@loadable/component'
import PublicRoutes from './routes/PublicRoutes'
const Login = loadable(() => import('./Pages/Login/Login'))
const SignUp = loadable(() => import('./Pages/SignUp/SignUp'))
const PantryPage = loadable(() => import('./Components/PantryPage/PantryPage'))
const RecipesPage = loadable(() => import('./Components/RecipesPage/RecipesPage'))
const GroceriesList = loadable(() => import('./Components/GroceriesList/GroceriesList'))
const IngredientRecipes = loadable(() => import('./Components/IngredientRecipes/IngredientRecipes'))
const Home = loadable(() => import('./Pages/Home/Home'))

function App () {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/pantry' element={<PantryPage />} />
              <Route path='/recipes' element={<RecipesPage />} />
              <Route path='/groceries' element={<GroceriesList />} />
              <Route path='/recipes/:id' element={<IngredientRecipes />} />
              <Route path='/favorites' element={<FavoritesPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>

  )
}

export default App
