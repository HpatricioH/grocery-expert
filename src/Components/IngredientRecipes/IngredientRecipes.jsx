import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../utilities/supabaseClient'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Container } from '@mui/material'

export const IngredientRecipes = ({ name }) => {
  const [groceryName, setGroceryName] = useState(null)
  const [recipes, setRecipes] = useState([])
  const { id } = useParams()
  const URL = `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${groceryName?.name}`

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
            />
            <ImageListItemBar
              title={item.strMeal}
              sx={{ textAlign: 'center' }}
            />
          </ImageListItem>

        ))}
      </ImageList>
    </Container>
  )
}
