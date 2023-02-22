import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { supabase } from './supabaseClient'

// Button costume style
const LoginGoogle = styled(Button)({
  backgroundColor: 'white',
  margin: '1rem 0 0',
  color: 'black',
  paddingRight: '1rem',
  width: '100%',
  gap: '0.8rem',
  '&:hover': {
    backgroundColor: '#e3e3e44d'
  }
})

const GoogleButton = ({ name, ...otherProps }) => {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    }, {
      redirectTo: 'http://127.0.0.1:8080/pantry'
    })
  }

  return (
    <LoginGoogle {...otherProps} onClick={signInWithGoogle} />
  )
}

export default GoogleButton
