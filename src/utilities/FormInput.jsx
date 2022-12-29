import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#3D550C'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#d32f2f'
      }
    },
    '&.Mui-focused fieldset': {
      borderColor: '#81B622'
    },
    '&:hover fieldset': {
      borderColor: '#81B622'
    }
  }
})

const FormInput = ({ ...otherProps }) => {
  return (
    <CssTextField
      {...otherProps}
      margin='normal'
      fullWidth
    />
  )
}

export default FormInput
