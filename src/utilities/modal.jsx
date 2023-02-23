import { useState } from 'react'

export const modal = () => {
  const [open, setOpen] = useState(false)
  const [idRecipe, setIdRecipe] = useState(null)
  const [idRecipeFav, setIdRecipeFav] = useState(null)

  const handleClose = () => {
    setOpen(false)
    setIdRecipe(null)
    setIdRecipeFav(null)
  }

  const handleOpen = (id, recipes) => {
    const singleRecipe = recipes?.filter((el) => el.idMeal === id)
    setIdRecipe(singleRecipe?.[0]?.idMeal)
    setIdRecipeFav(recipes[0].idRecipe)
    setOpen(true)
  }

  return { handleOpen, handleClose, open, idRecipe, idRecipeFav }
}
