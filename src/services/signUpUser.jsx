import { supabase } from '../utilities/supabaseClient'

export const signUpUser = async (email, password) => {
  try {
    const response = await supabase.auth.signUp({
      email,
      password
    })
    return response
  } catch (error) {
    throw new Error('Error creating profile:')
  }
}
