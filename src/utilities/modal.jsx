import { useState } from 'react'

export const modal = () => {
  const [open, setOpen] = useState(false)
  const [singleProduct, setSingleProduct] = useState(null)

  const handleClose = () => {
    setOpen(false)
    setSingleProduct(null)
  }

  const handleOpen = (id, groceries) => {
    const grocery = groceries?.filter((el) => el.id === id)
    setSingleProduct(grocery)
    setOpen(true)
  }

  return { handleOpen, handleClose, open, singleProduct }
}
