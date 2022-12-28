import { Box, Container, Checkbox, Typography, FormControlLabel } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
import FormInput from '../../utilities/FormInput'
import Buttons from '../../utilities/Buttons'

export const LoginForm = () => {
  const theme = createTheme()

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = e.target

    console.log(email.value)
    console.log(password.value)
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
              Sign In
            </Buttons>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='space-between'
              marginTop='1.5rem'
            >
              <Link>Forgot Password?</Link>
              {/* <Link>Sign Up</Link> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
