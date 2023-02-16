import { supabase } from '../utilities/supabaseClient'

export const updateGroceries = async (count, id, getPantry, getGroceriesCount) => {
  try {
    await supabase.from('groceries')
      .update({ quantity: count })
      .eq('id', id)
      .select()
    getGroceriesCount()
    getPantry()
  } catch (error) {
    throw new Error('Error fetching API')
  }
}
