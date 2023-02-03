import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import Container from '@mui/system/Container'
import Buttons from '../../utilities/Buttons'
import { useState } from 'react'

export const ProfilePage = () => {
  const [formError, setFormError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, userName } = e.target

    if (!name.value.trim() && !userName.value.trim()) {
      setFormError(true)
    }

    console.log(name.value)
    console.log(userName.value)
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
            />

            <FormInput
              id='userName'
              label='User Name'
              name='user name'
              autoComplete='user name'
              autoFocus
              error={formError}
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
