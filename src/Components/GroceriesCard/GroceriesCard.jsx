import React, { memo } from 'react'
import { Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useCount } from '../../hooks/useCount'
import { Count } from '../../utilities/Count'
import { useGroceries } from '../../hooks/useGroceries'
import { updateGroceries } from '../../services/updateGroceries'

const GroceriesCard = memo(({ name, quantity, image, id, getPantry }) => {
  const { count, handleIncrease, handleDecrease } = useCount({ quantity })
  const { getGroceriesCount } = useGroceries()

  const handleClick = async () => {
    if (count !== quantity) {
      updateGroceries(count, id, getPantry, getGroceriesCount)
    } else {
      // eslint-disable-next-line no-undef
      alert(`You already have ${quantity} ${name} in the pantry`)
    }
  }

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
      <Count
        count={count}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />

      {/* grocery images */}
      <img
        src={image}
        alt={name}
        className='ingredient__img'
        loading='lazy'
        style={{ width: '5rem', height: '5rem' }}
      />
      <EditIcon
        color='primary'
        style={{ placeSelf: 'center' }}
        onClick={() => handleClick()}
      />
    </>
  )
})

export default GroceriesCard
