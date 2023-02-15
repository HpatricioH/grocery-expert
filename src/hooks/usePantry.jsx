import { useEffect, useState } from 'react'
import { getGroceries } from '../utilities/getGroceries'

export const usePantry = (newItem) => {
  const [loading, setLoading] = useState(false)
  const [groceries, setGroceries] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPantry = async () => {
      try {
        setLoading(true)
        setError(null)
        const getProducts = await getGroceries()
        const groceriesAvailable = getProducts.filter((el) => el.quantity > 0)
        setGroceries(groceriesAvailable)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getPantry()
  }, [newItem])

  return { loading, groceries, error }
}
