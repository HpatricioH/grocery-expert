import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { Box, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export const PantryItemList = () => {
  const [groceries, setGroceries] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getGroceries = async () => {
      try {
        const { data, error } = await supabase.from('groceries').select('name, quantity, image, id')
        setGroceries(data)
        setError(error)
      } catch (error) {
        console.log(error)
      }
    }
    getGroceries()
    console.log('rendering')
  }, [])

  // console.log(SearchGroceries)

  return (
    groceries?.map((grocery) => {
      return (
        <Box key={grocery.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #3D550C' }}>

          {/* grocery name  */}
          <Typography style={{ placeSelf: 'center', fontSize: '0.8rem', width: '8rem' }}>{grocery?.name}</Typography>

          <Box style={{ display: 'flex', cursor: 'pointer', placeSelf: 'center' }}>
            <p style={{ margin: 0 }}>{grocery?.quantity}</p>
          </Box>

          {/* grocery images */}
          <img
            src={grocery?.image}
            alt={grocery?.name}
            className='ingredient__img'
          />
          <EditIcon color='primary' style={{ placeSelf: 'center' }} />
          {/* <Buttons style={{ height: '1.8rem', placeSelf: 'center', color: '#fff' }}>Add</Buttons> */}
        </Box>

      )
    })

  )
}
