import { supabase } from './supabaseClient'

export const auth = async (email, password) => {
  try {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
