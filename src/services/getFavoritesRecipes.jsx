import { supabase } from '../utilities/supabaseClient'

export const getFavoritesRecipes = async (user) => {
  const { data } = await supabase.from('favorites').select('idRecipe, name, image, id').eq('user_id', user.user.id)

  return data
}
