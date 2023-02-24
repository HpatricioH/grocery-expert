import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import Container from '@mui/system/Container'
import Buttons from '../../utilities/Buttons'
import { useRef, useState } from 'react'
import { updateProfile } from '../../services/updateProfile'

export const ProfilePage = () => {
  const formRef = useRef(null)
  const [formError, setFormError] = useState(false)
  const [error, setError] = useState(null)
  const [updateError, setUpdateError] = useState(null)
  const storageKey = import.meta.env.VITE_LOCALSTORAGE
  const { user } = JSON.parse(window.localStorage.getItem(storageKey))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, userName } = Object.fromEntries(
      new window.FormData(e.target)
    )

    if (!name && !userName) {
      setFormError(true)
      setError('Please Fill all the Fields!')
    } else {
      const error = await updateProfile(user, name, userName)
      setUpdateError(error)
    }

    if (updateError === null) {
      setError(null)
      // eslint-disable-next-line no-undef
      alert('Profile Updated Successfully')
      formRef.current.reset()
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
        <Box component='form' sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit} ref={formRef}>
          <FormControl error={formError} sx={{ width: '100%' }}>
            <FormInput
              id='name'
              label='Full Name'
              name='name'
              autoComplete='name'
              autoFocus
              error={formError || updateError}
              helperText={error}
            />

            <FormInput
              id='userName'
              label='User Name'
              name='userName'
              autoComplete='user name'
              autoFocus
              error={formError || updateError}
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
