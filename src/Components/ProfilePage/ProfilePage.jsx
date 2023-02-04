import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import Container from '@mui/system/Container'
import Buttons from '../../utilities/Buttons'
import { useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { useAuth } from '../../hooks/useAuth'

export const ProfilePage = () => {
  const { user } = useAuth()
  const [formError, setFormError] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, userName } = e.target

    if (!name.value.trim() && !userName.value.trim()) {
      setFormError(true)
      setError('Please Fill all the Fields!')
    } else {
      const { error } = await supabase.from('profiles').insert({
        id: user.id,
        full_name: name.value,
        username: userName.value
      })

      if (error) {
        setFormError(true)
        setError(error)
      }
    }
  }

  return (
    <Container component='main' maxWidth='xs'>

      <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <Typography
          component='h3'
          variant='h3'
          fontWeight='semi-bold'
          fontSize='3rem'
          color='#3D550C'
          fontFamily={headingFont.typography.fontFamily}
        >
          Profile Update
        </Typography>
        <Box component='form' sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
          <FormControl error={formError} sx={{ width: '100%' }}>
            <FormInput
              id='name'
              label='Full Name'
              name='name'
              autoComplete='name'
              autoFocus
              error={formError}
              helperText={error}
            />

            <FormInput
              id='userName'
              label='User Name'
              name='user name'
              autoComplete='user name'
              autoFocus
              error={formError}
              helperText={error}
            />

            <Buttons
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Buttons>

          </FormControl>
        </Box>

      </Box>
    </Container>
  )
}
