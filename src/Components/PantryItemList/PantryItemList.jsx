import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ModalUpdate from '../ModalUpdate/ModalUpdate'
import { GroceriesCard } from '../GroceriesCard/GroceriesCard'

export const PantryItemList = ({ newItem }) => {
  const [groceries, setGroceries] = useState(null)
  const [selectedGrocery, setSelectedGrocery] = useState(null)
  const [open, setOpen] = useState(false)

  // handle open and close modal
  const handleClose = () => setOpen(false)

  const handleOpen = (id) => {
    const grocery = groceries.filter((el) => el.id === id)
    setSelectedGrocery(grocery)
    setOpen(true)
  }

  // get groceries available
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

          <GroceriesCard
            name={grocery?.name}
            quantity={grocery?.quantity}
            image={grocery?.image}
          />

          <EditIcon color='primary' style={{ placeSelf: 'center' }} onClick={() => handleOpen(grocery.id)} />
          <ModalUpdate
            handleClose={handleClose}
            open={open}
            grocery={selectedGrocery?.[0]}
            getGroceries={getGroceries}
          />

        </Box>
      )
    })

  )
}
