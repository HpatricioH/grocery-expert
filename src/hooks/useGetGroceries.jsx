import { useEffect, useState } from 'react'
import { getGroceries } from '../utilities/getGroceries'

export const useGetGroceries = () => {
  const [pantryProducts, setPantryProducts] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPantryGroceries = async () => {
      try {
        setLoading(true)
        const groceries = await getGroceries()
        const groceriesAvailable = groceries?.filter((el) => el.quantity > 0)
        setPantryProducts(groceriesAvailable)
      } catch (error) {
        throw new Error('Error fetching groceries')
      } finally {
        setLoading(false)
      }
    }
    getPantryGroceries()
  }, [])

  return { pantryProducts, loading }
}
