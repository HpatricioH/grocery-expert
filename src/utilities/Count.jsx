import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box } from '@mui/material'

export const Count = ({ count, handleDecrease, handleIncrease }) => {
  return (
    <Box style={{ display: 'flex', cursor: 'pointer', placeSelf: 'center' }}>
      <ArrowLeftIcon onClick={handleDecrease} />
      <p style={{ margin: 0 }}>{count}</p>
      <ArrowRightIcon onClick={handleIncrease} />
    </Box>
  )
}
