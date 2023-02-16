import { useCallback, useEffect, useState } from 'react'
import { getApiGroceries } from '../services/getApiGroceries'

export const useGetIngredients = () => {
  const [ingredients, setIngredients] = useState(null)
  const [pantryItems, setPantryItems] = useState([])

  const getIngredients = useCallback(async () => {
    try {
      const getProducts = await getApiGroceries()
      setIngredients(getProducts)
    } catch (error) {
      throw new Error('Error fetching API')
    }
  }, [])

  useEffect(() => {
    getIngredients()
  }, [])

  useEffect(() => {
    if (ingredients?.meals) {
      setPantryItems(ingredients?.meals?.map(ingredient => ingredient.strIngredient))
    }
  }, [ingredients])

  return { pantryItems }
}
