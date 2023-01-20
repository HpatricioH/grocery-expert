import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Buttons from '../../utilities/Buttons'
import headingFont from '../../styles/fontTheme'
import { useState } from 'react'
import { Count } from '../../utilities/Count'
import { supabase } from '../../utilities/supabaseClient'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const ModalUpdate = ({ handleClose, open, grocery, setUpdateGrocery }) => {
  const [count, setCount] = useState(0)

  const handleClickUpdate = async () => {
    if (count !== grocery?.quantity) {
      const { data } = await supabase.from('groceries').update({ quantity: count }).eq('id', grocery?.id)
      setUpdateGrocery(data)
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-title'
          variant='h6'
          component='h2'
          fontFamily={headingFont.typography.fontFamily}
          fontSize='2rem'
          letterSpacing='0.1rem'
          color='#3D550C'
        >
          Update Quantity
        </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6rem'
        }}
        >
          <Typography id='modal-description' sx={{ mt: 2 }}>
            {grocery?.name}
          </Typography>
          <img
            src={grocery?.image}
            alt={grocery?.image}
            className='ingredient__img'
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', padding: '1rem 0 0' }}>
          <Typography id='modal-description' sx={{ textTransform: 'capitalize' }}>
            quantity:
          </Typography>
          <Count count={count} setCount={setCount} />
        </Box>

        <Buttons style={{ color: '#fff', margin: '1.5rem 0 0' }} onClick={handleClickUpdate}>Update</Buttons>
      </Box>
    </Modal>
  )
}

export default ModalUpdate
