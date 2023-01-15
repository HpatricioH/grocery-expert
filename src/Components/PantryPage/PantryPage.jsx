import { Autocomplete, Box, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FormInput from '../../utilities/FormInput'
import './pantryPage.css'

const PantryPage = () => {
  const [ingredients, setIngredients] = useState()
  const [value, setValue] = useState()

  useEffect(() => {
    async function getIngredients () {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        setIngredients(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getIngredients()
  }, [])

  const pantryItems = ingredients?.meals.map(ingredient => ingredient.strIngredient)

  return (
    <Container>
      <Typography variant='h4' component='h1'>Pantry</Typography>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        onChange={(e, newValue) => {
          setValue(newValue)
        }}
        options={pantryItems}
        sx={{ width: '100%' }}
        renderInput={(params) => <FormInput {...params} label='Ingredients' />}
      />
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* grocery name  */}
        <Typography style={{ placeSelf: 'center' }}>{value}</Typography>
        {/* grocery images */}
        {value === undefined || value === null
          ? null
          : <img
              src={`https://www.themealdb.com/images/ingredients/${value}.png`}
              alt={value}
              className='ingredient__img'
            />}
      </Box>

    </Container>
  )
}

export default PantryPage
