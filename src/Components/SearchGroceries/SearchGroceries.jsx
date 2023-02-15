import { Box, Typography } from '@mui/material'
import './searchGroceries.css'
import Buttons from '../../utilities/Buttons'
import { Count } from '../../utilities/Count'
import { useCount } from '../../hooks/useCount'

export const SearchGroceries = ({ value, addGroceries }) => {
  const { count, handleIncrease, handleDecrease } = useCount()
  const groceryImage = `https://www.themealdb.com/images/ingredients/${value}.png`

  // add grocery items to DB
  const handleAddItem = async () => {
    if (count > 0) {
      addGroceries(groceryImage, count)
    } else {
      console.log('add quantity')
    }
  }

  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

      {/* grocery name  */}
      <Typography style={{ placeSelf: 'center', fontSize: '0.8rem' }}>{value}</Typography>

      <Count count={count} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />

      {/* grocery images */}
      <img
        src={groceryImage}
        alt={value}
        className='ingredient__img'
      />
      <Buttons style={{ height: '1.8rem', placeSelf: 'center', color: '#fff' }} onClick={handleAddItem}>Add</Buttons>
    </Box>
  )
}
