import { createContext, useState } from 'react'

const GroceriesListContext = createContext()

export const GroceriesProvider = ({ children }) => {
  const [productCount, setProductCount] = useState()

  const value = {
    setProductCount,
    productCount
  }

  return (
    <GroceriesListContext.Provider value={value}>
      {children}
    </GroceriesListContext.Provider>
  )
}

export default GroceriesListContext
