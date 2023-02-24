import { supabase } from '../utilities/supabaseClient'

export const updateProfile = async (user, name, userName) => {
  const { error } = await supabase.from('profiles').update({
    full_name: name,
    username: userName
  }).eq('id', user.id)

  return error
}
