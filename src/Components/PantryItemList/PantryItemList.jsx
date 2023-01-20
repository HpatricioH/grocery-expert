import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { Box, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ModalUpdate from '../ModalUpdate/ModalUpdate'

export const PantryItemList = ({ newItem }) => {
  const [groceries, setGroceries] = useState(null)
  const [selectedGrocery, setSelectedGrocery] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const handleOpen = async (id) => {
    const grocery = await supabase.from('groceries').select().eq('id', id)
    setSelectedGrocery(grocery)
    setOpen(true)
  }

  const getGroceries = async () => {
    try {
      const { data } = await supabase.from('groceries').select('name, quantity, image, id')
      setGroceries(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getGroceries()
  }, [newItem])

  return (
    groceries?.map((grocery) => {
      return (
        <Box
          key={grocery.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 0',
            borderBottom: '1px solid #3D550C'
          }}
        >

          {/* grocery name  */}
          <Typography style={{
            placeSelf: 'center',
            fontSize: '0.8rem',
            width: '8rem'
          }}
          >
            {grocery?.name}
          </Typography>

          <Box style={{ display: 'flex', cursor: 'pointer', placeSelf: 'center' }}>
            <p style={{ margin: 0 }}>{grocery?.quantity}</p>
          </Box>

          {/* grocery images */}
          <img
            src={grocery?.image}
            alt={grocery?.name}
            className='ingredient__img'
          />
          <EditIcon color='primary' style={{ placeSelf: 'center' }} onClick={() => handleOpen(grocery.id)} />
          <ModalUpdate
            handleClose={handleClose}
            open={open}
            grocery={selectedGrocery?.data[0]}
            getGroceries={getGroceries}
          />

        </Box>
      )
    })

  )
}
