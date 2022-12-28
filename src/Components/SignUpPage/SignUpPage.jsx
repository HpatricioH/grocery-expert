import { Box, Container, Checkbox, Typography, FormControlLabel } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../utilities/supabaseClient'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'

export const SignUpPage = () => {
  const theme = createTheme()
  const history = useNavigate()

  const createProfile = async (firstName, lastName, userId) => {
    const response = await supabase.from('profiles').insert({
      first_name: firstName,
      last_name: lastName,
      id_user: userId
    })
    console.log(response)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, firstName, lastName } = e.target

    const response = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    await createProfile(firstName.value, lastName.value, response.id)

    history('/')
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
            <Box
              display='flex'
              flexDirection='row'
            >
              <FormInput
                id='firstName'
                label='First Name'
                name='firstName'
                style={{ marginRight: '1rem' }}
              />
              <FormInput
                id='lastName'
                label='last Name'
                name='lastName'
              />

            </Box>
            <FormInput
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <FormInput
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
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
