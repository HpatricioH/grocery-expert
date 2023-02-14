import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ModalUpdate from '../ModalUpdate/ModalUpdate'
import { GroceriesCard } from '../GroceriesCard/GroceriesCard'
import { getGroceries } from '../../utilities/getGroceries'
import { usePantry } from '../../hooks/usePantry'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import { modal } from '../../utilities/modal'

export const PantryItemList = ({ newItem }) => {
  const { groceries, loading } = usePantry(newItem)
  const { handleOpen, handleClose, open, singleProduct } = modal()

  return loading
    ? <LoadingSpinner />
    : (
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
              <EditIcon
                color='primary'
                style={{ placeSelf: 'center' }}
                onClick={() => handleOpen(grocery.id, groceries)}
              />
              <ModalUpdate
                handleClose={handleClose}
                open={open}
                grocery={singleProduct?.[0]}
                getGroceries={getGroceries}
              />
            </Box>
          )
        })
      )
}
