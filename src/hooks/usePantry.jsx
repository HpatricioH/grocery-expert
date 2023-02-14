import { useCallback, useMemo, useState } from 'react'
import { getGroceries } from '../utilities/getGroceries'

export const usePantry = (newItem) => {
  const [loading, setLoading] = useState(false)
  const [groceries, setGroceries] = useState(null)
  const [error, setError] = useState(null)

  const getPantryProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const getProducts = await getGroceries()
      setGroceries(getProducts)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [newItem])

  const getOneProduct = (id) => {
    return groceries?.filter((el) => el.id === id)
  }

  return { loading, groceries, error, getPantryProducts, getOneProduct }
}
