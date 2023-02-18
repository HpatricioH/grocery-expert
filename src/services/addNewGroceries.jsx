import { supabase } from '../utilities/supabaseClient'

export const addNewGroceries = async (userId, value, image, quantity) => {
  try {
    const { data } = await supabase.from('groceries')
      .insert({
        user_id: userId,
        name: value,
        image,
        quantity
      }).select('name, quantity, image, id')
    return data
  } catch (error) {
    throw new Error('grocery not added')
  }
}
