import { useCallback, useEffect, useState } from 'react'
import { getFavoritesRecipes } from '../services/getFavoritesRecipes'

export const useFavoritesRecipes = (recipeDeleted, user) => {
  const [recipes, setRecipes] = useState(null)

  const getFavRecipes = useCallback(async () => {
    const data = await getFavoritesRecipes(user)
    setRecipes(data)
  }, [])

  useEffect(() => {
    getFavRecipes()
  }, [recipeDeleted])

  return { recipes }
}
