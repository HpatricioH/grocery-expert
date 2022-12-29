import { Box, Container, Checkbox, Typography, FormControlLabel, FormControl } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../utilities/supabaseClient'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'
import { useState } from 'react'

export const SignUpPage = () => {
  const [error, setError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [formError, setFormError] = useState(false)
  const theme = createTheme()
  const history = useNavigate()

  const createProfile = async (firstName, lastName, userId) => {
    // TODO: fix this function to store user name into database
    try {
      const response = await supabase.from('profiles').insert({
        first_name: firstName,
        last_name: lastName,
        id_user: userId
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, firstName, lastName } = e.target

    if (!email.value && !password.value && !firstName.value && !lastName.value) {
      setError('Please fill all fields')
      setFormError(true)
    }

    try {
      const response = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })
      if (response.error === null) {
        history('/')
        setError(null)
        setFormError(false)
        await createProfile(firstName.value, lastName.value, response.id)
      } else {
        setPasswordError(response.error.message)
        setFormError(true)
      }
    } catch (error) {
      console.log(error)
    }
    e.target.reset()
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>

        <Box sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <img src={logo} alt='company logo' style={{ width: '100%', height: '100%', marginBottom: '2rem' }} />
          <Typography
            component='h1'
            variant='h5'
            fontWeight='semi-bold'
            fontSize='1.8rem'
            color='#3D550C'
          >
            Sign Up
          </Typography>

          <Box component='form' sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
            <FormControl>
              <Box
                display='flex'
                flexDirection='row'
              >
                <FormInput
                  id='firstName'
                  label='First Name'
                  name='firstName'
                  error={formError}
                  helperText={error}
                  style={{ marginRight: '1rem' }}
                />
                <FormInput
                  id='lastName'
                  label='last Name'
                  name='lastName'
                  error={formError}
                  helperText={error}
                />

              </Box>
              <FormInput
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                error={formError}
                helperText={error}
              />
              <FormInput
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                error={formError}
                helperText={passwordError}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Buttons
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Buttons>
            </FormControl>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-end'
              marginTop='1.5rem'
            >
              <Link to='/'>Already have an account? Sign In</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
