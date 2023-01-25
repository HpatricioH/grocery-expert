import React from 'react'
import GroceriesListContext from '../context/GroceriesListContext'

export const useGroceries = () => {
  return React.useContext(GroceriesListContext)
}
