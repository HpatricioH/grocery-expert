import { Box, Container, Typography } from '@mui/material'
import headingFont from '../../styles/fontTheme'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import { NoGroceries } from '../NoGroceries/NoGroceries'
import { usePantry } from '../../hooks/usePantry'
import loadable from '@loadable/component'

const GroceriesCard = loadable(() => import('../GroceriesCard/GroceriesCard'))

const GroceriesList = () => {
  const { groceryList, loading, getPantry } = usePantry()

  return (
    <>
      <Container component='section'>
        <Typography
          variant='h4'
          component='h1'
          textAlign='center'
          fontFamily={headingFont.typography.fontFamily}
          fontWeight='semi-bold'
          fontSize='4rem'
          letterSpacing='0.2rem'
          color='#3D550C'
          padding='1.5rem 0 0'
        >
          Grocery List
        </Typography>

        {loading
          ? <LoadingSpinner />
          : groceryList?.map((grocery) => {
            return (
              <Box
                key={grocery?.id} style={{
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
          })}
      </Container>
      {groceryList?.length === 0 && !loading ? <NoGroceries /> : null}
    </>
  )
}

export default GroceriesList
