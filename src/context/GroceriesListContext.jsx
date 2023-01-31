import { createContext, useEffect, useState } from 'react'
import { supabase } from '../utilities/supabaseClient'

const GroceriesListContext = createContext()

export const GroceriesProvider = ({ children }) => {
  const [groceriesCount, setGroceriesCount] = useState(0)

  // count groceries in the list to buy to show in badge
  const getGroceriesCount = async () => {
    const { data } = await supabase.from('groceries').select().eq('quantity', 0)
    setGroceriesCount(data?.length)
  }

  useEffect(() => {
    getGroceriesCount()
  }, [])

  const value = {
    getGroceriesCount,
    groceriesCount
  }

  return (
    <GroceriesListContext.Provider value={value}>
      {children}
    </GroceriesListContext.Provider>
  )
}

export default GroceriesListContext
