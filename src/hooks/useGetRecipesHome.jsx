import { useCallback, useEffect, useState } from 'react'
import { getApiRecipes } from '../services/getApiRecipes'

export const useGetRecipesHome = () => {
  const [recipes, setRecipes] = useState([])

  const getRandomRecipes = useCallback(async () => {
    try {
      const response = await getApiRecipes()
      setRecipes(response)
    } catch (error) {
      console.log(error)
    }
  }, [setRecipes])

  useEffect(() => {
    getRandomRecipes()
  }, [])

  return { recipes }
}
