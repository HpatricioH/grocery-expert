import { Autocomplete, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import headingFont from '../../styles/fontTheme'
import FormInput from '../../utilities/FormInput'
import { supabase } from '../../utilities/supabaseClient'
import { PantryItemList } from '../PantryItemList/PantryItemList'
import { SearchGroceries } from '../SearchGroceries/SearchGroceries'

export const PantryPage = () => {
  const { user } = useAuth()
  const [ingredients, setIngredients] = useState(null)
  const [pantryItems, setPantryItems] = useState([])
  const [value, setValue] = useState()
  const [newItem, setNewItem] = useState(null)
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  useEffect(() => {
    async function getIngredients () {
      try {
        const response = await axios.get(url)
        setIngredients(response?.data)
      } catch (error) {
        console.log(error)
      }
    }
    getIngredients()
  }, [])

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

  useEffect(() => {
    if (ingredients?.meals) {
      setPantryItems(ingredients.meals.map(ingredient => ingredient.strIngredient))
    }
  }, [ingredients])

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
        onChange={(newValue) => {
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

        <PantryItemList newItem={newItem} />
      </div>
    </Container>

  )
}
