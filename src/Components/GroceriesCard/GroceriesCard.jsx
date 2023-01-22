import React from 'react'
import { Box, Typography } from '@mui/material'

export const GroceriesCard = ({ name, quantity, image }) => {
  return (
    <>
      {/* grocery name  */}
      <Typography style={{
        placeSelf: 'center',
        fontSize: '0.8rem',
        width: '8rem'
      }}
      >
        {name}
      </Typography>

      {/* grocery quantity */}
      <Box style={{ display: 'flex', cursor: 'pointer', placeSelf: 'center' }}>
        <p style={{ margin: 0 }}>{quantity}</p>
      </Box>

      {/* grocery images */}
      <img
        src={image}
        alt={name}
        className='ingredient__img'
        loading='lazy'
      />
    </>
  )
}
