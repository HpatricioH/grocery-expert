import { useState } from 'react'

export const modal = () => {
  const [open, setOpen] = useState(false)
  const [idRecipe, setIdRecipe] = useState(null)

  const handleClose = () => {
    setOpen(false)
    setIdRecipe(null)
  }

  const handleOpen = (id, recipes) => {
    const singleRecipe = recipes?.meals?.filter((el) => el.idMeal === id)
    setIdRecipe(singleRecipe[0].idMeal)
    setOpen(true)
  }

  return { handleOpen, handleClose, open, idRecipe }
}
