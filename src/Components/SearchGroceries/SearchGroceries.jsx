import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import './searchGroceries.css'
import Buttons from '../../utilities/Buttons'
import { Count } from '../../utilities/Count'

export const SearchGroceries = ({ value, addGroceries }) => {
  const [count, setCount] = useState(0)
  const groceryImage = `https://www.themealdb.com/images/ingredients/${value}.png`

  // add grocery items to DB
  const handleAddItem = async () => {
    if (count > 0) {
      addGroceries(groceryImage, count)
      setCount(0)
    } else {
      console.log('add quantity')
    }
  }

  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

      {/* grocery name  */}
      <Typography style={{ placeSelf: 'center', fontSize: '0.8rem' }}>{value}</Typography>

      <Count count={count} setCount={setCount} />

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
