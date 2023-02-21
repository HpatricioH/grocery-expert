import { supabase } from '../utilities/supabaseClient'

export const updateProfile = async (user, name, userName) => {
  const { error } = await supabase.from('profiles').insert({
    id: user.id,
    full_name: name,
    username: userName
  })

  return error
}
