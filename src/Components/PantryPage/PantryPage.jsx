import { Autocomplete, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FormInput from '../../utilities/FormInput'
import { SearchGroceries } from '../SearchGroceries/SearchGroceries'

const PantryPage = () => {
  const [ingredients, setIngredients] = useState()
  const [value, setValue] = useState()
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  useEffect(() => {
    async function getIngredients () {
      try {
        const response = await axios.get(url)
        setIngredients(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getIngredients()
  }, [])

  const pantryItems = ingredients?.meals.map(ingredient => ingredient.strIngredient)

  return (
    <>
      <Container>
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
          : <SearchGroceries value={value} />}

        <Typography variant='h4' component='h1'>Pantry</Typography>
      </Container>

    </>
  )
}

export default PantryPage
