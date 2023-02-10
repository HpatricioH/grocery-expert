import { Box, Container, Checkbox, Typography, FormControlLabel, FormControl } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'
import headingFont from '../../styles/fontTheme'
import { supabase } from '../../utilities/supabaseClient'
import { auth } from '../../utilities/auth'
import GoogleButton from '../../utilities/GoogleButton'
import googleIcon from '../../assets/pictures/goggleIcon.png'

export const LoginForm = () => {
  const [error, setError] = useState(null)
  const [formError, setFormError] = useState(false)
  const theme = createTheme()
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        if (data.session) {
          navigate('/home')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getSession()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = Object.fromEntries(
      new window.FormData(e.target)
    )

    const token = await auth(email, password)

    if (token.error) {
      setFormError(true)
      setError(token.error.message)
    } else {
      setError(null)
      setFormError(false)
      navigate('/home')
    }
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
            fontSize='4rem'
            color='#3D550C'
            fontFamily={headingFont.typography.fontFamily}
          >
            Sign In
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
              margin='1.5rem 0'

            >
              <Link>Forgot Password?</Link>
              <Link to='/signUp'>Sign Up</Link>
            </Box>
            <Typography
              component='h5'
              variant='h5'
              fontWeight='semi-bold'
              fontSize='1.1rem'
              color='#3D550C'
              textAlign='center'
            >
              or
            </Typography>
            <GoogleButton variant='outlined'>
              <img src={googleIcon} alt='google icon' className='icon' style={{ width: '1.2rem' }} />
              Sign in with Google
            </GoogleButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
