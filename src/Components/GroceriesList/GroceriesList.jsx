import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { GroceriesCard } from '../GroceriesCard/GroceriesCard'
import { NoGroceries } from '../NoGroceries/NoGroceries'

export const GroceriesList = () => {
  const [list, setList] = useState(null)

  const getGroceriesList = async () => {
    try {
      const { data } = await supabase.from('groceries').select().eq('quantity', '0')
      setList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGroceriesList()
  }, [])

  return (
    <Container component='section'>
      {!list?.length
        ? <NoGroceries />
        : list?.map((product) => {
          return (
            <Box
              key={product?.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderBottom: '1px solid #3D550C'
              }}
            >
              <GroceriesCard
                name={product?.name}
                quantity={product?.quantity}
                image={product?.image}
              />
            </Box>
          )
        })}
    </Container>
  )
}
