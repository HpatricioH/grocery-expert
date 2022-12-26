import { Box, TextField, Typography, Container, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const Login = () => {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Typography component='h1' variant='h5'>Expert Grocery</Typography>
          <Box component='form' sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
