import { Box, Typography } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import React, { useState } from 'react'
import './searchGroceries.css'
import Buttons from '../../utilities/Buttons'

export const SearchGroceries = ({ value, addGroceries }) => {
  const [count, setCount] = useState(0)
  const groceryImage = `https://www.themealdb.com/images/ingredients/${value}.png`

  const handleIncrease = (e) => {
    e.preventDefault()
    if (count >= 0) setCount(count + 1)
  }

  const handleDecrease = (e) => {
    e.preventDefault()
    if (count > 0) setCount(count - 1)
  }

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

      <Box style={{ display: 'flex', cursor: 'pointer', placeSelf: 'center' }}>
        <ArrowLeftIcon onClick={handleDecrease} />
        <p style={{ margin: 0 }}>{count}</p>
        <ArrowRightIcon onClick={handleIncrease} />
      </Box>

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
