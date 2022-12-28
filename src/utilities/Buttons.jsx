import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

// Button costume style
const ButtonLogin = styled(Button)({
  backgroundColor: '#81B622',
  '&:hover': {
    backgroundColor: '#59981A'
  }
})

const Buttons = ({ name, ...otherProps }) => {
  return (
    <ButtonLogin {...otherProps} />
  )
}

export default Buttons
