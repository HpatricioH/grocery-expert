import React from 'react'
import { Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useCount } from '../../hooks/useCount'
import { Count } from '../../utilities/Count'
import { supabase } from '../../utilities/supabaseClient'
import { useGroceries } from '../../hooks/useGroceries'

export const GroceriesCard = ({ name, quantity, image, id }) => {
  const { count, handleIncrease, handleDecrease } = useCount({ quantity })
  const { getGroceriesCount } = useGroceries()

  const handleClick = async () => {
    if (count !== quantity) {
      const { data } = await supabase.from('groceries').update({ quantity: count }).eq('id', id).select()
      getGroceriesCount()
      console.log(data)
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
      />
      <EditIcon
        color='primary'
        style={{ placeSelf: 'center' }}
        onClick={() => handleClick()}
      />
    </>
  )
}
