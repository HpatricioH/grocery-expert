import { useEffect } from 'react'
import { supabase } from '../../utilities/supabaseClient'

export const FavoritesPage = () => {
  useEffect(() => {
    const getFavoritesRecipes = async () => {
      const { data } = supabase.from('favorites').select()
      console.log(data)
    }
    getFavoritesRecipes()
  }, [])

  return (
    <div>FavoritesPage</div>
  )
}
