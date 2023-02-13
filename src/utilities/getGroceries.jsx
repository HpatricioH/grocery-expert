import { supabase } from './supabaseClient'

export const getGroceries = async () => {
  const storageKey = import.meta.env.VITE_LOCALSTORAGE
  const user = JSON.parse(window.localStorage.getItem(storageKey))

  try {
    const { data } = await supabase.from('groceries')
      .select()
      .eq('user_id', user.user.id)
    return data
  } catch (error) {
    throw new Error('Error fetching groceries')
  }
}
