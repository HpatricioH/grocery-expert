import { Box, Container, Checkbox, Typography, FormControlLabel, FormControl } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'
import { useState } from 'react'
import headingFont from '../../styles/fontTheme'
import { signUpUser } from '../../services/signUpUser'

export const SignUpPage = () => {
  const [error, setError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [formError, setFormError] = useState(false)
  const theme = createTheme()
  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = Object.fromEntries(new window.FormData(e.target))

    if (!email && !password) {
      setError('Please fill all fields')
      setFormError(true)
    }

    try {
      const response = await signUpUser(email, password)

      if (response.error === null) {
        history('/')
        setError(null)
        setFormError(false)
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
            fontSize='4rem'
            color='#3D550C'
            fontFamily={headingFont.typography.fontFamily}
          >
            Sign Up
          </Typography>

          <Box component='form' sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
            <FormControl style={{ width: '100%' }}>

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
