import { useState } from 'react'
import { addNewGroceries } from '../services/addNewGroceries'

export const useAddGroceries = (user) => {
  const [value, setValue] = useState()
  const [newItem, setNewItem] = useState(null)

  const addGroceries = async (image, quantity) => {
    const userId = user.id

    try {
      const data = await addNewGroceries(userId, value, image, quantity)
      setNewItem(data)
      setValue()
    } catch (error) {
      console.log(error)
    }
  }

  return { newItem, value, setValue, addGroceries }
}
