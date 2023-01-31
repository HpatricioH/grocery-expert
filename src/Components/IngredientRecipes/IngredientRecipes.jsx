import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../utilities/supabaseClient'
import { ImageList, ImageListItem, ImageListItemBar, Container } from '@mui/material'
import { ModalRecipes } from '../ModalRecipes/ModalRecipes'

export const IngredientRecipes = () => {
  const [groceryName, setGroceryName] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [open, setOpen] = useState(false)
  const [idRecipe, setIdRecipe] = useState(null)
  const { id } = useParams()
  const URL = `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${groceryName?.name}`

  const handleClose = () => setOpen(false)
  const handleOpen = (id) => {
    const singleRecipe = recipes?.meals?.filter((el) => el.idMeal === id)
    setIdRecipe(singleRecipe[0].idMeal)
    setOpen(true)
  }

  useEffect(() => {
    const getGroceryName = async () => {
      try {
        const { data } = await supabase.from('groceries').select('name').eq('id', id)
        setGroceryName(data?.[0])
      } catch (error) {
        console.log(error)
      }
    }

    getGroceryName()
  }, [])

  const getRecipes = async () => {
    try {
      const { data } = await axios.get(`${URL}`)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRecipes()
  }, [groceryName])

  return (
    <Container component='section'>
      <ImageList sx={{ width: 400, height: '100%' }}>
        <ImageListItem key='Subheader' cols={2} />
        {recipes?.meals?.map((item) => (

          <ImageListItem key={item.idMeal}>
            <img
              src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
              alt={item.strMeal}
              loading='lazy'
              onClick={() => handleOpen(item.idMeal)}
            />
            <ImageListItemBar
              title={item.strMeal}
              sx={{ textAlign: 'center' }}
            />
            <ModalRecipes open={open} handleClose={handleClose} id={idRecipe} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
