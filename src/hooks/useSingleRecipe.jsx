import { useCallback, useEffect, useState } from 'react'
import { getSingleRecipe } from '../services/getSingleRecipe'

export const useSingleRecipe = (open, id) => {
  const [recipe, setRecipe] = useState(null)

  const fetchRecipe = useCallback(async () => {
    const data = await getSingleRecipe(id)
    setRecipe(data?.meals)
  }, [open])

  useEffect(() => {
    fetchRecipe()
  }, [open])

  return { recipe, setRecipe }
}
