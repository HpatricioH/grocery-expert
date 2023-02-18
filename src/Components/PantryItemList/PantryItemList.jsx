import { Box } from '@mui/material'
import { GroceriesCard } from '../GroceriesCard/GroceriesCard'
import { usePantry } from '../../hooks/usePantry.jsx'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'

export const PantryItemList = ({ newItem, value }) => {
  const { groceries, loading, getPantry } = usePantry(newItem, value)

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
                id={grocery?.id}
                getPantry={getPantry}
              />
            </Box>
          )
        })
      )
}
