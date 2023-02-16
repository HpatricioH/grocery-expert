import { useCallback, useEffect, useState } from 'react'
import { getGroceries } from '../services/getGroceries'

export const usePantry = (newItem, value) => {
  const [loading, setLoading] = useState(false)
  const [groceries, setGroceries] = useState(null)
  const [groceryList, setGroceryList] = useState(null)
  const [error, setError] = useState(null)

  const getPantry = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const getProducts = await getGroceries()
      const groceriesAvailable = getProducts.filter((el) => el.quantity > 0)
      const groceriesNoAvailable = getProducts.filter((el) => el.quantity === 0)
      setGroceries(groceriesAvailable)
      setGroceryList(groceriesNoAvailable)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [groceries, groceryList])

  useEffect(() => {
    getPantry()
  }, [newItem])

  return { loading, groceries, error, groceryList, getPantry }
}
