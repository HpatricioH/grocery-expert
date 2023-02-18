import { useCallback, useEffect, useState } from 'react'
import { getGroceries } from '../services/getGroceries'
import { getRecipes } from '../services/getRecipes'

export const useGetRecipes = async (id) => {
  const [recipes, setRecipes] = useState([])
  const [groceryName, setGroceryName] = useState(null)

  useEffect(() => {
    const getGroceryName = async () => {
      const singleData = await getGroceries()
      const data = singleData?.filter((el) => el.id === Number(id))
      setGroceryName(data?.[0])
    }
    getGroceryName()
  }, [])

  const getRandomRecipes = useCallback(async () => {
    try {
      const data = await getRecipes(groceryName?.name)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getRandomRecipes()
  }, [groceryName])

  return { recipes, getRandomRecipes, groceryName }
}
