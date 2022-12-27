import { Box, TextField, Typography, Container, CssBaseline, Checkbox, Button, Grid } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Link } from 'react-router-dom'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#3D550C'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#81B622'
    },
    '&:hover fieldset': {
      borderColor: '#81B622'
    }
  }
})

// Button costume style
const ButtonLogin = styled(Button)({
  backgroundColor: '#81B622',
  '&:hover': {
    backgroundColor: '#59981A'
  }
})

export const Login = () => {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Typography component='h1' variant='h5' fontWeight='bold'>Expert Grocery</Typography>
          <Box component='form' sx={{ mt: 1, width: '100%' }}>
            <CssTextField
              margin='normal'
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <CssTextField
              margin='normal'
              fullWidth
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
            <ButtonLogin
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </ButtonLogin>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Link>Forgot Password?</Link>
              <Link>Sign Up</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
