import { CircularProgress } from '@mui/material'
import '../styles/spinner.css'

export const LoadingSpinner = () => {
  return (
    <div className='spinner__container'>
      <CircularProgress />
    </div>
  )
}
