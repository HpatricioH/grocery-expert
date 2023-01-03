import { Box, Container, Checkbox, Typography, FormControlLabel, FormControl } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'

export const LoginForm = () => {
  const { handleLogin, user } = useAuth()
  const [error, setError] = useState(null)
  const [formError, setFormError] = useState(false)
  const theme = createTheme()
  const navigate = useNavigate()

  // useEffect(() => {
  //   handleLogin()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = e.target
    // TODO: add Google social login

    // TODO: is this validation useful?
    if (!email.value && !password.value) {
      setFormError(true)
    } else {
      // login context function
      handleLogin(email.value, password.value, navigate)
    }

    console.log(user)

    if (user?.error === null) {
      setError(null)
      setFormError(false)
    } else {
      setError(user.error.message)
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
            Sign in
          </Typography>

          <Box component='form' sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
            <FormControl error={formError} sx={{ width: '100%' }}>
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
                helperText={error}
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
                Sign In
              </Buttons>
            </FormControl>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='space-between'
              marginTop='1.5rem'
            >
              <Link>Forgot Password?</Link>
              <Link to='/signUp'>Sign Up</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
