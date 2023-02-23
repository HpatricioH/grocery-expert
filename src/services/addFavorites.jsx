import { supabase } from '../utilities/supabaseClient'

export const addFavorites = async (item, user) => {
  const error = await supabase
    .from('favorites')
    .insert({
      user_id: user.user.id,
      idRecipe: item.idMeal,
      name: item.strMeal,
      image: item.strMealThumb
    })

  return error
}
