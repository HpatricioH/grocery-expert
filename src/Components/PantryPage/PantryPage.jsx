import loadable from '@loadable/component'
import { Autocomplete, Container, Typography } from '@mui/material'
import { useAddGroceries } from '../../hooks/useAddGroceries'
import { useAuth } from '../../hooks/useAuth'
import { useGetIngredients } from '../../hooks/useGetIngredients'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import { SearchGroceries } from '../SearchGroceries/SearchGroceries'

const PantryItemList = loadable(() => import('../PantryItemList/PantryItemList'))

const PantryPage = () => {
  const { user } = useAuth()
  const { pantryItems } = useGetIngredients()
  const { value, newItem, setValue, addGroceries } = useAddGroceries(user)

  return (
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
      >Pantry
      </Typography>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        onChange={(e, newValue) => {
          setValue(newValue)
        }}
        options={pantryItems}
        sx={{ width: '100%' }}
        renderInput={(params) => <FormInput {...params} label='Add Groceries' />}
      />

      {/* grocery search elements */}
      {value === undefined || value === null
        ? null
        : <SearchGroceries value={value} addGroceries={addGroceries} />}

      <div>

        <PantryItemList newItem={newItem} value={value} />
      </div>
    </Container>

  )
}

export default PantryPage
