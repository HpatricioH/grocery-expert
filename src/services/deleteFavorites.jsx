import { supabase } from '../utilities/supabaseClient'

export const deleteFavorites = async (item) => {
  const error = await supabase.from('favorites').delete().eq('id', item.id)

  return error
}
