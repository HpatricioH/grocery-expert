import { useCallback, useEffect, useState } from 'react'
import { getGroceries } from '../services/getGroceries'
import { getRecipes } from '../services/getRecipes'

export const useGetRecipes = (id) => {
  const [recipes, setRecipes] = useState([])
  const [groceryName, setGroceryName] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getGroceryName = async () => {
      const singleData = await getGroceries()
      const data = singleData?.filter((el) => el.id === Number(id))
      setGroceryName(data[0])
    }
    getGroceryName()
  }, [id])

  const getRandomRecipes = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getRecipes(groceryName?.name)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [groceryName])

  useEffect(() => {
    getRandomRecipes()
  }, [getRandomRecipes])

  return { recipes, loading }
}
