import { Autocomplete, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useGetIngredients } from '../../hooks/useGetIngredients'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import { supabase } from '../../utilities/supabaseClient'
import { PantryItemList } from '../PantryItemList/PantryItemList'
import { SearchGroceries } from '../SearchGroceries/SearchGroceries'

export const PantryPage = () => {
  const { user } = useAuth()
  const { pantryItems } = useGetIngredients()
  const [value, setValue] = useState()
  const [newItem, setNewItem] = useState(null)

  // insert data into DB
  const addGroceries = async (image, quantity) => {
    const userId = user.id

    try {
      const { data } = await supabase.from('groceries')
        .insert({
          user_id: userId,
          name: value,
          image,
          quantity
        }).select('name, quantity, image, id')
      setNewItem(data)
      setValue()
    } catch (error) {
      console.log(error)
    }
  }

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
